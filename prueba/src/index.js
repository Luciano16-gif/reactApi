import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiNoKey from './pages/ApiNoKey';
import ApiKey from './pages/ApiKey';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApiNoKey />}  />
        <Route path="/:id" element={<ApiKey />}  />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

