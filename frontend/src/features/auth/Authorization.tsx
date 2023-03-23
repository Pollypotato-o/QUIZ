/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store';
import * as api from './api';

function Authorization():JSX.Element {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, message } = useSelector((store:RootState) => store.userReducer);

  if (user) {
     navigate('/');
  }
    const handleLog = (e:React.FormEvent<HTMLFormElement>) :void => {
      e.preventDefault();
      api.authorization({ email, password }).then((res) => dispatch({ type: 'AUTHORIZATION', payload: res }));
    };

  return (
    <div>
    <form className="formReg container " onSubmit={handleLog}>

        <div className="input-field">
        <input placeholder="email" className="input_form" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="input-field">
        <input placeholder="password" className="input_form" name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>


        <button type="submit" className="button_auth">Войти</button>
    </form>
    {message.length > 0 && <h1>{message}</h1>}
    </div>
  );
}

export default Authorization;