import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function HireMe() {
  return (
    <Stack direction="row" spacing={2}>
     
      <Button variant="contained" endIcon={<SendIcon />} color="success">
        Send
      </Button>
    </Stack>
  );
}