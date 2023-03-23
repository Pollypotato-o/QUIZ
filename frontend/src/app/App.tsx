import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Authorization from '../features/auth/Authorization';
import Registration from '../features/auth/Registration';
import Themes from '../features/themes/Themes';
import './App.css';
import Layout from './Layout';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Authorization/>} />
        <Route path="/" element={<Themes />} />
         {/* <Route path="/static" element={<Static />}/> */}
        <Route path="/registration" element={<Registration />}/>
      </Route>
   </Routes>

  );
}

export default App;
