import { Box, Grid, Typography } from "@mui/material";
import TodoCard from "./TodoCard";

export default function Home() {
  return (
    <>
      <Box padding={2}>
        <Typography variant="h4">All Todos</Typography>
      </Box>
      <Grid container>
        <TodoCard title={"Task 1"} description={"Task 1 Description"} />
      </Grid>
    </>
  );
}
