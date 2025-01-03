import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams("1");
  return (
    <>
      Diary {params.id}
      {params.page}
    </>
  );
};

export default Diary;
