import { useEffect } from "react";

function Even() {
  useEffect(() => {
    console.log("짝수입니다.");
    return () => {
      console.log("홀수입니다.");
    };
  }, []);
  return (
    <>
      <h1>even</h1>
    </>
  );
}
export default Even;
