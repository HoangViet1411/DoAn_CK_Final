import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password });
            navigate('/'); // Điều hướng về trang đăng nhập sau khi đăng ký thành công
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="register-container"> {/* Thêm container cho RegisterForm */}
            <form onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Đăng ký</button>
                <p>Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
            </form>
        </div>
    );
}

export default RegisterForm;
