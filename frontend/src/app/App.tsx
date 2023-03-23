import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Themes from '../features/themes/Themes';
import './App.css';
import Layout from './Layout';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Themes />} />
        {/* <Route path="/static" element={<Static />}/>
        <Route path="/registration" element={<Registration />}/> */}
      </Route>
   </Routes>

  );
}

export default App;
