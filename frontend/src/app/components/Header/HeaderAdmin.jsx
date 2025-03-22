import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function HeaderAdmin() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username'); // Lấy username từ localStorage

    const handleLogout = () => {
        localStorage.removeItem('username'); // Xóa thông tin đăng nhập
        localStorage.removeItem('role');
        navigate('/'); // Chuyển hướng về trang đăng nhập
    };

    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between', // Đẩy các phần tử ra hai đầu
                alignItems: 'center', // Căn giữa theo chiều dọc
                padding: '1rem',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: '60px', marginRight: '1rem' }} />
                <h1 style={{ margin: 0 }}>Laptop VK</h1>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center', // Xếp ngang, căn giữa theo chiều dọc
                    gap: '0.5rem', // Khoảng cách giữa các phần tử
                }}
            >
                {username ? (
                    <>
                        <span style={{ fontSize: '20px' }}>👤</span>
                        <span style={{ fontSize: '13px' }}>{username}</span>
                        <button
                            onClick={handleLogout}
                            style={{
                                padding: '0.5rem',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                fontSize: '13px',
                                color: 'inherit',
                            }}
                        >
                            Đăng xuất
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '0.5rem',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            fontSize: '13px',
                            color: 'inherit',
                        }}
                    >
                        Đăng xuất
                    </button>
                )}
            </div>
        </header>
    );
}

export default HeaderAdmin;