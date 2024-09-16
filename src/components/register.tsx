// src/components/Register.tsx
import React, { useState } from 'react';
import axios from 'axios';


interface RegisterFormData {
    username: string;
    password: string;
}

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // Define the request body
        const requestBody: RegisterFormData = {
            username,
            password,
        };

        try {

            const response = await axios.post('http://10.20.30.47:9191/api/auth/register', requestBody);


            setMessage(`Registration successful: ${response.data.message}`);
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
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
