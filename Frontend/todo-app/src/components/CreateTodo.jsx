import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

export default function CreateTodo() {
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
            />
            <br />
            <br />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
            <Box paddingTop={2}>
              <Button variant="outlined">Create</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
