import { useNavigate } from "react-router-dom";

const ListSection = ({ board, row }) => {
  const nav = useNavigate();
  return (
    <>
      <tr
        onClick={() => {
          nav(`/select/${board.id}`, { state: board });
        }}
      >
        <td>{row}</td>
        <td>{board.title}</td>
        <td>{board.name}</td>
        <td>{board.rating.toFixed(1)}</td>
        <td>{new Date(board.date).toLocaleDateString()}</td>
      </tr>
    </>
  );
};
export default ListSection;
