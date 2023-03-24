/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Button } from '@mui/material';
import OneQuestionView from './OneQuestion';
import type { RootState } from '../../store';
import * as themesApi from './api';
import * as userApi from '../auth/api';
import type Theme from './types/Theme';
import type Question from './types/Question';

// import * as pointsApi from '../static/apiStatic';

function Themes(): JSX.Element {
  const themes = useSelector(
    (state: RootState) => state.themesReducer.themesList,
  );

    //   const points = useSelector((state: RootState) => state.themes.score);
  const user = useSelector((state: RootState) => state.userReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseGame = (): void => {
    // pointsApi
    //   .addStaticUsers(points)
    //   .then((p) => dispatch({ type: 'static/addStaticUser', payload: p }));
    // navigate('/static');
  };

  useEffect(() => {
    themesApi.loadThemes().then((data) => {
      dispatch({ type: 'themes/loadThemes', payload: data });
    });
    userApi.verification().then((data) => {
      dispatch({ type: 'VERIFICATION', payload: data });
    });
  }, [dispatch]);

  return (
    <div 
      style={{
        marginTop: '50px',
        height: '',
      }}
    >
      {user ? (
        <Grid
          container
          alignItems="center"
          justifyContent="space-around"
          // sx={{ backgroundColor: '#282828' }}
        >
          {themes.map((theme: Theme) => (
            <Grid
              container
              key={theme.id}
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
              // style={{ minHeight: '28.5vh' }}
              // sx={{
              //   margin: '0px',
              // }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  width: '300px',
                  fontSize: 50,
                  fontFamily: 'Szlichta',
                  fontStyle: 'bold',
                  color: '#37474f',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  verticalAlign: 'center',
                  margin: '0px 50px 0px 0px',
                }}
              >
                {theme.title}
              </Typography>
              {theme.Questions.map(
                (el: Question): JSX.Element => (
                  <OneQuestionView question={el} key={el.id} />
                ),
              )}
            </Grid>
          ))}

          <Button
            type="button"
            size="large"
            variant="outlined"
            color="primary"
            onClick={handleCloseGame}
            style={{ marginBottom: '100px', marginTop: '100px' }}
          >
            Закончить игру
          </Button>
        </Grid>
      ) : (
        <Grid
          container
          alignItems="stretch"
          justifyContent="center"
          sx={{backgroundColor: 'transparent'  ,fontSize: '60px', color: '#37474f' }}
        >
          {' '}
          Войдите или зарегистрируйтесь!
        </Grid>
      )}
    </div>
  );
}

export default Themes;
