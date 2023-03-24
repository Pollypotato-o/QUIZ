import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store';
import * as api from './api';

function Registration():JSX.Element {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, message } = useSelector((store:RootState) => store.userReducer);

  if (user) {
     navigate('/');
  }
    const handleReg = (e:React.FormEvent<HTMLFormElement>) :void => {
      e.preventDefault();
      api.registration({ name, email, password, password2 }).then((res) => dispatch({ type: 'REGISTRATION', payload: res }));
    };

  return (
    <div>
    <form className="formReg_container " onSubmit={handleReg}>
    <div className="input-field">
    <input placeholder="name" className="input_form" name="name" onChange={(e) => setName(e.target.value)} value={name} />
    </div>
        <div className="input-field">
        <input placeholder="email" className="input_form" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="input-field">
        <input placeholder="password" className="input_form" name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="input-field">
        <input placeholder="repeat password" className="input_form" name="password2" type="password" onChange={(e) => setPassword2(e.target.value)} value={password2} />
        </div>
        <button type="submit" className="button_auth">Зарегистрироваться</button>
    </form>
    {message.length > 0 && <h1>{message}</h1>}
    </div>
  );
}

export default Registration;