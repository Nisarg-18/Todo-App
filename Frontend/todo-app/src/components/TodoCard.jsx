import { Box, Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";

export default function TodoCard({ title, description }) {
  return (
    <>
      <Box width={300} padding={3}>
        <div style={{ cursor: "pointer" }}>
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
                <Button variant="outlined">Edit</Button>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Box>
    </>
  );
}
