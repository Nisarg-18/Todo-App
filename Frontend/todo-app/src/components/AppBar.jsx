import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function TodoAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ cursor: "pointer" }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              onClick={() => {
                navigate("/");
              }}
            >
              Todo App
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box padding={3}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create a new Todo
        </Button>
      </Box>
    </Box>
  );
}
