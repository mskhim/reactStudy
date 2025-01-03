import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  return (
    <div className="home">
      <Header bt1="<" bt2=">" content={new Date().toDateString()} />
      <DiaryList />
    </div>
  );
};

export default Home;
