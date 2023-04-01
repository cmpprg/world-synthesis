import React from "react";
import GSDialogText from "components/GSDialogText";
import { Typography } from "@mui/material";

export interface RulesAndRegulationsProps {
  open: boolean;
  handleClose: () => void;
}

const RulesAndRegulations = (props: RulesAndRegulationsProps) => {
  const { open, handleClose } = props;

  return (
    <GSDialogText
      open={open}
      handleClose={handleClose}
      title="Rules and Regulations"
    >
      <Typography variant="body1">
        Placeholder content for Rules and Regulations.
      </Typography>
    </GSDialogText>
  );
};

export default RulesAndRegulations;
