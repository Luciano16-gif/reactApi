import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from './pages/Prueba';
import Home from './pages/Home';
import Hooks from './pages/Hooks';
import ApiNoKey from './pages/ApiNoKey';
import ApiKey from './pages/ApiKey';
import ApiKey2 from './pages/ApiKey2';
import Api from './pages/Api';
//import { useParams } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/prueba" element={<Prueba />}  />
        <Route path="/api" element={<Api />}  />
        <Route path="/hooks" element={<Hooks />}  />
        <Route path="/ApiNoKey" element={<ApiNoKey />}  />
        <Route path="/ApiNoKey/:id" element={<ApiKey />}  />
        <Route path="/ApiKey2" element={<ApiKey2 />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

