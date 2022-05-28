import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/navbar/NavBar';
import { AppIndex } from '../pages/AppIndex';
import { Fafourites } from '../pages/Fafourites';

export const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppIndex />} />
        <Route path="/favourites" element={<Fafourites />} />
      </Routes>
    </Router>
  );
};
