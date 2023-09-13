import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const createTodo = async () => {
    await axios.post("http://localhost:3000/createTodo", {
      title,
      description,
    });
    navigate("/");
  };

  return (
    <>
      <Box width={500} padding={5}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4" marginBottom={2}>
              Create Todo
            </Typography>

            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <br />
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
            <Box paddingTop={2}>
              <Button
                variant="outlined"
                onClick={() => {
                  createTodo();
                }}
              >
                Create
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
