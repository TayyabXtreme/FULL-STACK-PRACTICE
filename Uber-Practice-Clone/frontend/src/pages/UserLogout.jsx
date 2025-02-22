import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login'); // If no token, redirect immediately
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: { Authorization: `Bearer ${token}` }
        }).then(response => {
            localStorage.removeItem('token');
            navigate('/login');
        }).catch(error => {
            console.error("Logout failed:", error);
        });

    }, [navigate]);

    return <div>Logging out...</div>;
};

export default UserLogout;
