// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                {/* Navigation Links */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                {/* Route Definitions */}
                <main>
                    <Routes>

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                    </Routes>
                </main>
            </div>
        </Router>
    );
};



export default App;
