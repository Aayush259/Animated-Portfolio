import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './components/home/Home.jsx';
import Projects from './components/my_projects/Projects.jsx';
import About from './components/about/About.jsx';
import ConnectWithMe from './components/connect/ConnectWithMe.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='projects' element={<Projects />} />
      <Route path='about' element={<About />} />
      <Route path='connect' element={<ConnectWithMe />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
