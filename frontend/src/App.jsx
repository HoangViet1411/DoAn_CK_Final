import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './app/components/LoginForm/LoginForm';
import RegisterForm from './app/components/RegisterForm/RegisterForm';
import Admin from './app/admin/Admin';
import HeaderAdmin from './app/components/Header/HeaderAdmin';
import Footer from './app/components/Footer/Footer';

function App() {
    return (
        <Router>
            <HeaderAdmin />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;