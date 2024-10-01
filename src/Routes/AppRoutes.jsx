import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Error404 from '../pages/Error404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/order-management' element={<Error404 />} />
      <Route path='/brand' element={<Error404 />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
