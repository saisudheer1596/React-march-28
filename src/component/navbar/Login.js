import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log(`Email: ${email} Password: ${password}`);
        setEmail('');
        setPassword('');

        // Simulate successful login
        onLogin();
        Swal.fire('Login Successful!', '', 'success');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-3 text-center'>
                    <div className='card '>
                        <div className='card-body'>
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <br />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <br />
                                <button type="submit" className='btn btn-info'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
