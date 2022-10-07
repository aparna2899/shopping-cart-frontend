import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const user = localStorage.getItem('user');

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
  );
}
