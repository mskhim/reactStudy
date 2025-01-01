import "./ListItem.css";

const ListItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheck = () => {
    onUpdate(id);
  };
  return (
    <div className="listItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheck} />
      <p className="content">{content}</p>
      <p className="date">{new Date(date).toLocaleDateString()}</p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default ListItem;
