import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import * as api from '../features/auth/api';
import '../index.css';


function Layout(): JSX.Element {
  const score = useSelector((state: RootState) => state.themesReducer.score);
  const user = useSelector((state: RootState) => state.userReducer.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogin = (): void => {
    navigate('/login');
  };


  const handlerStatistics = (): void => {
    navigate('/static');
  };


  const handlerLogout = (): void => {
    api.logout().then((data) => {
      dispatch({ type: 'LOGOUT', payload: data });
      navigate('/')
    })
  };

const handlerRegistration = (): void => {
    navigate('/registration')
};


  return (
    <div className='bg'>

      <Box sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
        <AppBar position="static" className='navBar' sx={{ flexGrow: 1}}>
            {/* backgroundColor: '#8e24aa', height: '100px', }}> */}
          <Toolbar sx={{height: '100px',}}>
          <img src='/beav.png' alt='x' style={{ width: '60px', height: '60px', marginRight: '15px' }}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 2,  }}>
              
              <Link style={{ color: '#37474f', fontSize: 56, textShadow: '3px 3px 3px gray', textDecorationLine: 'none', letterSpacing: '5px', fontFamily: 'SuperWebcomicBros', }} to="/">
                Quiz
              </Link>
              {user ? 
              <span style={{ marginLeft: '50px', fontFamily: 'SuperWebcomicBros', fontSize: '30px', color: '#37474f',}}>
                Привет, {user.name}
              </span>
              :
              null
              }
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 24, color: '#37474f', fontFamily: 'SuperWebcomicBros', fontWeight: 'bold', }}>

                {user && `Ваш счёт: ${score}`}
                {user && <Link style={{ color: 'yellow', margin: 20, fontSize: 18, fontFamily: 'SuperWebcomicBros', fontWeight: 'bold', textDecorationLine: 'none', letterSpacing: '2px'}} to="/static">
                Стата
              </Link>}
              </Typography>
              {user ? 
              <Button color="inherit" onClick={handlerLogout} sx={{ color: '#37474f', fontSize: 30, fontFamily: 'SuperWebcomicBros', textShadow: '2px 2px 2px gray', letterSpacing: '2px' }}>
              Выйти
             </Button> :
             <>
             <Button color="inherit" onClick={handlerLogin} sx={{ color: '#37474f', fontSize: 30, fontFamily: 'SuperWebcomicBros', textShadow: '2px 2px 2px gray', letterSpacing: '2px' }}>
              Войти
             </Button>
             <Button color="inherit" onClick={handlerRegistration} sx={{ color: '#37474f', fontSize: 30, fontFamily: 'SuperWebcomicBros', textShadow: '2px 2px 2px gray', letterSpacing: '2px' }}>
              Регистрация
             </Button>
            </>
               }

          </Toolbar>
        </AppBar>
      </Box>

      <Outlet />
    </div>
  );
}

export default Layout;
