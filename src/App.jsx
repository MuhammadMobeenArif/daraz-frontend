import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';

function RequiredAuth({ children }) {
    const { user } = useContext(AuthContext);
    return user ? children : <Navigate to="/login" />;
}

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Protected Routes */}
                    <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
                    <Route path="/profile/:id" element={<RequiredAuth><Profile /></RequiredAuth>} />
                    <Route path="/create-post" element={<RequiredAuth><CreatePost /></RequiredAuth>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}