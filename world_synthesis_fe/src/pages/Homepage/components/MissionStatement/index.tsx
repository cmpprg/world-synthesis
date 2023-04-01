import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

export interface MissionStatementProps {
  open: boolean;
  handleClose: () => void;
}

const MissionStatement = (props: MissionStatementProps) => {
  const { open, handleClose } = props;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Mission Statment</DialogTitle>
      <DialogContent>
        Some dialog content here for your mission statement.
      </DialogContent>
    </Dialog>
  );
};

export default MissionStatement;
