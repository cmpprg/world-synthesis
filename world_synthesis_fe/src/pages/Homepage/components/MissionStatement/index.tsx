import { Typography } from "@mui/material";
import GSDialogText from "components/GSDialogText";
import React from "react";

export interface MissionStatementProps {
  open: boolean;
  handleClose: () => void;
}

const MissionStatement = (props: MissionStatementProps) => {
  const { open, handleClose } = props;

  return (
    <GSDialogText
      open={open}
      handleClose={handleClose}
      title="Mission Statement"
    >
      <Typography variant="body1">
        Placeholder content for Mission Statment.
      </Typography>
    </GSDialogText>
  );
};

export default MissionStatement;
