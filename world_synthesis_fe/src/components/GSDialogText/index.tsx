import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";

export interface GSDialogTextProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: React.ReactNode;
}

const GSDialogText = (props: GSDialogTextProps) => {
  const { open, handleClose, title, children } = props;

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
      <DialogTitle variant="h3" align="center">
        {title}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default GSDialogText;
