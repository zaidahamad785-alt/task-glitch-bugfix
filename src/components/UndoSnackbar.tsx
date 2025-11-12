import { Snackbar, Button, SnackbarCloseReason } from '@mui/material';
import { SyntheticEvent } from 'react';

interface Props {
  open: boolean;
  onClose: (event: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={4000}
      message="Task deleted"
      action={<Button color="secondary" size="small" onClick={onUndo}>Undo</Button>}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}


