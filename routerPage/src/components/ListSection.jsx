import { memo } from "react";
import { useNavigate } from "react-router-dom";

const ListSection = ({ board, row }) => {
  const nav = useNavigate();
  const formattedDate = new Date(board.regDate).toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <tr
        onClick={() => {
          nav(`/select/${board.no}`, { state: board });
        }}
      >
        <td>{row}</td>
        <td>{board.title}</td>
        <td>{board.writer}</td>
        <td>{1}</td>
        <td>{formattedDate}</td>
      </tr>
    </>
  );
};
export default memo(ListSection);
