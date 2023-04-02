import { Typography } from "@mui/material";
import GSDialogText from "components/GSDialogText";
import React from "react";

export interface MissionStatementProps {
  open: boolean;
  handleClose: () => void;
}

const content: string = `
We strive to facilitate collaboration and creativity in the fields of art, science, 
philosophy, and more. We operate on the assumption that we are probably missing something that you have.
It is with this humble understanding that we seek to fill the gap between the knowledge of the world and the knowledge of the individual. 
`;

const MissionStatement = (props: MissionStatementProps) => {
  const { open, handleClose } = props;

  return (
    <GSDialogText
      open={open}
      handleClose={handleClose}
      title="Mission Statement"
    >
      <Typography variant="body1">
        {content}
      </Typography>
    </GSDialogText>
  );
};

export default MissionStatement;
