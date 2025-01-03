import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Diary from "./pages/Diary";
import Header from "./components/Header";
function App() {
  const nav = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary/:id/:page" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
