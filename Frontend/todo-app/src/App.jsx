import TodoAppBar from "./components/AppBar";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <Router>
        <RecoilRoot>
          <TodoAppBar />
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/create"} element={<CreateTodo />}></Route>
            <Route path={"/edit/:id"} element={<EditTodo />}></Route>
          </Routes>
        </RecoilRoot>
      </Router>
    </>
  );
}

export default App;
