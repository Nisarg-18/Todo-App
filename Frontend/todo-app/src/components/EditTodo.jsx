import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  let todo = {};

  const updateTodo = async () => {
    await axios.put("http://localhost:3000/editTodo/" + id, {
      title,
      description,
    });

    navigate("/");
  };

  useEffect(() => {
    axios.get("http://localhost:3000/getTodo/" + id).then((res) => {
      todo = res.data.todo;
      setTitle(todo.title);
      setDescription(todo.description);
    });
  }, []);

  return (
    <>
      <Box width={500} padding={5}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" marginBottom={2}>
              Edit Todo
            </Typography>

            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Box paddingTop={2}>
              <Button
                variant="outlined"
                onClick={() => {
                  updateTodo();
                }}
              >
                Update
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
