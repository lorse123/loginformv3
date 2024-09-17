import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    // Handle form submission and registration logic
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Send POST request to the server
            const response = await axios.post('http://100.10.10.243:9191/api/auth/register', {
                username,
                password
            });

            // Set success message and redirect to login page after 2 seconds
            setMessage(`Registration successful: ${response.data.message}`);
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setMessage(`Registration failed: ${error.response.data.message}`);
            } else {
                setMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>} {/* Display success or error message */}
        </div>
    );
};

export default Register;
