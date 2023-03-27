import spinningGlobe from "assets/spinning_globe_earth_regular.gif";
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";

const Homepage = () => (
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "75%",
    }}
  >
    <Box>
      <img
        src={spinningGlobe}
        className="spinning globe"
        alt="spinning globe earth"
      />
    </Box>
    <Typography variant="h1">World Synthesis</Typography>
    <Typography variant="h3">
      Synthesizing a Better World Through Collaboration
    </Typography>
    <ButtonGroup
      fullWidth
      sx={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "3rem",
      }}
    >
      <Button variant="contained" color="primary" sx={{ width: "25%" }}>
        Mission
      </Button>
      <Button variant="contained" color="primary" sx={{ width: "25%" }}>
        Rules and Regulations
      </Button>
    </ButtonGroup>
  </Container>
);

export default Homepage;
