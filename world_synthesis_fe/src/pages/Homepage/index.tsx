import { useState } from "react";
import spinningGlobe from "assets/spinning_globe_earth_regular.gif";
import MisstionStatement from "pages/Homepage/components/MissionStatement";
import RulesAndRegulations from "pages/Homepage/components/RulesAndRegulations";
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";

const Homepage = () => {
  const [openMissionStatement, setOpenMissionStatement] = useState(false);
  const [openRulesAndRegulations, setOpenRulesAndRegulations] = useState(false);

  const handleCloseMissionStatement = () => {
    setOpenMissionStatement(false);
  };

  const handleOpenMissionStatement = () => {
    setOpenMissionStatement(true);
  };

  const handleOpenRulesAndRegulations = () => {
    setOpenRulesAndRegulations(true);
  };

  const handleCloseRulesAndRegulations = () => {
    setOpenRulesAndRegulations(false);
  };

  return (
    <>
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
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "25%" }}
            onClick={handleOpenMissionStatement}
          >
            Mission
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "25%" }}
            onClick={handleOpenRulesAndRegulations}
          >
            Rules
          </Button>
        </ButtonGroup>
      </Container>
      <MisstionStatement
        open={openMissionStatement}
        handleClose={handleCloseMissionStatement}
      />
      <RulesAndRegulations
        open={openRulesAndRegulations}
        handleClose={handleCloseRulesAndRegulations}
      />
    </>
  );
};

export default Homepage;
