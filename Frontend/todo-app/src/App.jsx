import TodoAppBar from "./components/AppBar";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <TodoAppBar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/create"} element={<CreateTodo />}></Route>
          <Route path={"/edit/:id"} element={<EditTodo />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
