import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./page/Board";
import Insert from "./page/Insert";
import Select from "./page/Select";
import Update from "./page/Update";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/select/:id" element={<Select />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </>
  );
}
export default App;
