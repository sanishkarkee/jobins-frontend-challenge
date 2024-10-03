import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/Order-Management' element={<Error404 />} />
      <Route path='/Brand' element={<Error404 />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
