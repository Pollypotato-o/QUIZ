import { Typography, Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type Action from './types/Action';
import type Question from './types/Question';

export default function OneQuestionView({
  question,
}: {
  question: Question;
}): JSX.Element {
  // стэйты на модальное окно и кнопки
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  // показ ответа или инпута
  const [answerShow, setAnswerShow] = useState(false);
  // строка ответа
  const [answer, setAnswer] = useState('');
  // инпут для ответа
  const [inputText, setInput] = useState('');

  const dispatch = useDispatch();

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => {
    setOpen(false);
    // setDisable(true);
    dispatch<Action>({
      type: 'themes/changeQuestion',
      payload: { id: Number(question.id), themeId: Number(question.theme_id) },
    });
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setInput(event.target.value);
  };

  const handlerAnswer: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputText.toLowerCase() === question.answer.toLowerCase()) {
      dispatch<Action>({
        type: 'themes/changePoints',
        payload: question.points,
      });
      setAnswer(`Молодец! +${question.points}`);
    } else {
      dispatch<Action>({
        type: 'themes/changePoints',
        payload: -question.points,
      });
      setAnswer(
        `Блин... -${question.points}. Правильный ответ: ${question.answer}`,
      );
    }
    setAnswerShow(true);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        disabled={question.answered}
        color="secondary"
        sx={{
          fontSize: 40,
          fontFamily: 'Szlichta',
          width: '150px',
          height: '150px',
          fontWeight: 'bold',
          letterSpacing: '2px',
          border: '3px #9c27b0 solid',
        }}
      >
        {question.points}
      </Button>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              // eslint-disable-next-line @typescript-eslint/prefer-as-const
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 700,
              height: 400,
              bgcolor: 'background.paper',
              // border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              backgroundColor: '#9c27b0',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: 36,
                fontFamily: 'Szlichta',
                margin: '5px 0px 10px 0px',
                // width: '150px',
              }}
            >
              {question.question}
            </Typography>
            {answerShow ? (
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  fontSize: 30,
                  fontFamily: 'Szlichta',
                  color: 'yellow',
                }}
              >
                {answer}
              </Typography>
            ) : (
              <form onSubmit={handlerAnswer}>
                <input value={inputText} onChange={handleInputChange} />
                <Button
                  type="submit"
                  sx={{
                    mt: 2,
                    fontSize: 22,
                    fontFamily: 'Szlichta',
                    color: 'yellow',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    // margin: '10px 0px 5px 5px',
                    margin: '0px',
                  }}
                >
                  Узнать ответ
                </Button>
              </form>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
}
