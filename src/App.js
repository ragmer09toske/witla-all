import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Welcome } from './pages';
import { Witla } from './pages/witla';
import { Lesotho } from './pages/lesotho';
import { Summit } from './pages/summit';
import { Register } from './pages/register';
import { ContactUs } from './pages/contactUs';
import { Packages } from './pages/packages';
import { Accomodation } from './pages/accomodations';
function App() {
  return (
      <Router>
        <Box>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/witla" element={<Witla />} />
            <Route path="/lesotho" element={<Lesotho />} />
            <Route path="/summit" element={<Summit />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/accomodation" element={<Accomodation />} />
          </Routes>
        </Box>
      </Router>
  );
}

export default App;