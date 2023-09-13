import { Box, Grid, Typography } from "@mui/material";
import TodoCard from "./TodoCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState([]);

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
