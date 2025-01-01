import React, { useState } from "react";

const SelectList = ({ id, name, content, date, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateContent, setUpdatecontent] = useState("");
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

export default SelectList;
