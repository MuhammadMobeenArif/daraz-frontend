/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from 'react';
import API from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Token verify karne ke liye apni profile fetch kar rahe hain
                    // Backend par humara route tha /api/users/profile, lekin token decode ke liye hum direct user ID ya generic /me route bana sakte hain
                    // Abhi ke liye hum token decode ke baad user setup local storage se backup le rahe hain ya dummy parse kar rahe hain
                    const savedUser = localStorage.getItem('user');
                    if (savedUser) setUser(JSON.parse(savedUser));
                } catch (err) {
                    logout();
                }
            }
            setLoading(false);
        };
        checkLoggedIn();
    }, []);

    const login = (token, userData) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};