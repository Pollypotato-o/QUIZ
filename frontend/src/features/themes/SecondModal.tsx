import { Typography, Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type Question from './types/Question';
// import OneQuestion from './OneQuestion';
import type { RootState } from '../../store';
import '../features.css';

export default function ChildModal({
  answer,
}: {
  answer: Question;
}): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  // const answer = useSelector((state: RootState) => state.themesReducer)

  return (
    <div className='second_modal'>
      <Button onClick={handleOpen}
      sx ={{       
        fontFamily: 'birchctt', 
        fontSize: 36,   
        color: '#37474f', 
    }}
      >Узнать ответ</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx ={{       
          fontFamily: 'birchctt',     
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Box
          sx={{
            width: 700,
            height: 400,
            fontFamily: 'birchctt',
            backgroundColor: '#d4e157',
            borderRadius: '15px',
            color: '#37474f',
            textAlign: 'center',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {answer.answer}
          </Typography>

          <img src={`${answer.picForAnswer}`} alt="" />
          <div>{answer.infoForAnswer}</div>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
