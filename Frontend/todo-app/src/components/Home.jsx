import { Box, Grid, Typography } from "@mui/material";
import TodoCard from "./TodoCard";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { allTodosState } from "../atoms/allTodosAtom";

export default function Home() {
  const [todos, setTodos] = useRecoilState(allTodosState);

  const getAllTodos = () => {
    axios.get("http://localhost:3000/allTodos").then((response) => {
      console.log(response);
      setTodos(response.data.todos);
    });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <Box padding={2}>
        <Typography variant="h4">All Todos</Typography>
      </Box>
      {todos ? (
        <Grid container>
          {todos.map((todo) => {
            return (
              <TodoCard
                key={todo._id}
                id={todo._id}
                title={todo.title}
                description={todo.description}
                getAllTodos={getAllTodos}
              />
            );
          })}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
