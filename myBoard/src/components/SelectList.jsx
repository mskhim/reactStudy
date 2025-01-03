import React, { useContext, useState } from "react";
import { memo } from "react";
import { boardStateContext } from "../App";
import { boardDispatchContext } from "../App";

const SelectList = ({ id, name, content, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateContent, setUpdatecontent] = useState("");
  const { onDelete, onUpdate } = useContext(boardDispatchContext);

  const toggleEdit = () => {
    setIsEditing((data) => !data);
  };

  return (
    <>
      <tr>
        <td>{content}</td>
        <td>{name}</td>
        <td>{new Date(date).toLocaleDateString()}</td>
        <td>
          <button onClick={toggleEdit}>수정</button>
          <button
            onClick={() => {
              onDelete(id);
              alert("게시글이 삭제되었습니다.");
            }}
          >
            삭제
          </button>
        </td>
      </tr>
      {isEditing && (
        <tr>
          <td colSpan="4">
            <textarea
              className="edit-textarea"
              placeholder="수정할 내용을 입력하세요"
              value={updateContent}
              onChange={(e) => {
                setUpdatecontent(e.target.value);
              }}
            ></textarea>
            <button
              onClick={() => {
                onUpdate(id, updateContent);
                setUpdatecontent("");
                toggleEdit();
                alert("게시글 수정이 완료되었습니다.");
              }}
            >
              입력
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

// export default memo(SelectList, (prevProps, nextProps) => {
//   //return false면 리랜더링 발생
//   if (prevProps.id !== nextProps.id) {
//     return false;
//   }
//   if (prevProps.name !== nextProps.name) {
//     return false;
//   }
//   if (prevProps.content !== nextProps.content) {
//     return false;
//   }
//   if (prevProps.date !== nextProps.date) {
//     return false;
//   }
//   return true;
// });
export default memo(SelectList);
