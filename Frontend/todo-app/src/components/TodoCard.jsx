import { Box, Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TodoCard({ id, title, description, getAllTodos }) {
  const navigate = useNavigate();

  const deleteTodo = async (id) => {
    axios.delete("http://localhost:3000/deleteTodo/" + id).then((res) => {
      getAllTodos();
    });
  };

  return (
    <>
      <Box width={300} padding={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              marginTop={1}
              marginBottom={2}
            >
              {description}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                variant="outlined"
                onClick={() => {
                  navigate("/edit/" + id);
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  deleteTodo(id);
                }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
