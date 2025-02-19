import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogut = () => {
    const navigate = useNavigate();
    const {setCaptain}=useContext(CaptainDataContext)

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login-captain'); // If no token, redirect immediately
            return;
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            localStorage.removeItem('token');
            setCaptain({
                fullname: { firstname: '', lastname: '' },
                email: '',
                password: '',
                vehicle: { color: '', vehicleType: '', plate: '', capacity: '' }
            });
            navigate('/login');
        })
        .catch(error => {
            if (error.response && error.response.status === 401) {
                // Handle token expiry or invalid token
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                console.error("Logout failed:", error);
            }
        });
        

    }, [navigate]);

    return <div>Logging out...</div>;
}

export default CaptainLogut