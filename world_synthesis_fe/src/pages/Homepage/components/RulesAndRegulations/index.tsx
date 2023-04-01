import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

export interface RulesAndRegulationsProps {
  open: boolean;
  handleClose: () => void;
}

const RulesAndRegulations = (props: RulesAndRegulationsProps) => {
  const { open, handleClose } = props;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Rules and Regulations</DialogTitle>
      <DialogContent>
        Some dialog content here for your Rules and Regulations.
      </DialogContent>
    </Dialog>
  );
};

export default RulesAndRegulations;
