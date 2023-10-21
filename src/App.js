import { Routes, Route } from "react-router-dom";
import Register from "./Components/Registration/Register";
import Genre from "./Components/ChooseGenre/Genre";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/category" element={<Genre />} />
    </Routes>
  );
}

export default App;
