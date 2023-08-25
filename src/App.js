import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Layout } from './components/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { useSelector } from 'react-redux';
import { NotFound } from './components/NotFound';

const ProtectedRoute = ({ element }) => {
  const user = useSelector((state) => state.auth.user);
  if (user && !localStorage.getItem('email') && !localStorage.getItem('password')) {
    return <Navigate to="/" />;
  }

  return element;
};

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute element={<><Sidebar /><Layout /></>} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
