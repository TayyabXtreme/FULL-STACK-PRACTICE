import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
    const navigate = useNavigate();
    const {user,setUser}=useContext(UserDataContext)
     const [isLoading, setIsLoading] = useState(true);
     const token = localStorage.getItem('token');
    useEffect(() => {
        
        if (!token) {
            navigate('/login', { replace: true });
        }else {
            axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                if (res.status === 200) {
                    setUser(res.data);
                    setIsLoading(false);
                }
            }).catch((err) => {
                // Handle error (e.g., navigate to login on error)
                console.error(err);
                navigate('/login', { replace: true });
            });
        }
    }, [token, navigate, setUser]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserProtectWrapper;
