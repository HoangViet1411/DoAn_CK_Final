import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideBarAdmin from '../components/SideBarAdmin/SideBarAdmin';

function Admin() {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) return navigate('/');

        axios
            .get(`http://localhost:5000/api/auth/check-admin?username=${username}`)
            .then((res) => {
                if (!res.data.isAdmin) {
                    navigate('/');
                } else {
                    setIsAdmin(true);
                }
            })
            .catch(() => navigate('/'));
    }, [navigate]);

    if (!isAdmin) return null;

    return (
        <div style={{ display: 'flex' }}>
            <SideBarAdmin />
            <div className="admin-content">
                <h2>Trang Admin</h2>
                <p>Chào mừng đến trang quản trị!</p>
            </div>
        </div>
    );
}

export default Admin;