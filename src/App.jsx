import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Header from "./components/Header.jsx";
import EditTodo from "./pages/EditTodo.jsx";

function App() {
  return (
    <div>

      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/editTodo" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
