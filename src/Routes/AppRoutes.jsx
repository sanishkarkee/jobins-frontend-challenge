import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import OrderManagement from '../pages/OrderManagement';
import Brand from '../pages/Brand';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/order-management' element={<OrderManagement />} />
      <Route path='/brand' element={<Brand />} />
    </Routes>
  );
};

export default AppRoutes;
