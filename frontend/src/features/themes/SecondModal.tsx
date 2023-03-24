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
    <div className="second_modal">
      <Button
        onClick={handleOpen}
        sx={{
          fontFamily: 'SuperWebcomicBros',
          fontSize: 36,
          color: '#37474f',
          verticalAlign: 'middle',
        }}
      >
        Узнать ответ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          fontFamily: 'SuperWebcomicBros',
          fontSize: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          verticalAlign: 'middle',
        }}
      >
        <Box
          sx={{
            width: 700,
            height: 600,
            fontFamily: 'SuperWebcomicBros',
            fontSize: 36,
            backgroundColor: '#d4e157',
            borderRadius: '15px',
            color: '#37474f',
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontFamily: 'SuperWebcomicBros',
              fontSize: 30,
              color: '#37474f',
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
          >
            {answer.answer}
          </Typography>
<div className='answer'>
          <img src={`${answer.picForAnswer}`} alt="" />
          <div className='infoForAnswer'>{answer.infoForAnswer}</div>
          </div>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
