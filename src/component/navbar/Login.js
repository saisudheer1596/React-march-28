import React, { useState } from 'react';
import { useHref, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHref();
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email} Password: ${password}`);
        setEmail('');
        setPassword('');
        history.push('/dashboard');
    };
    const doSomethingAndNavigate = function () {
        console.log("I am Doing Something......");
        navigate("/Home");
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
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
                        <button type="submit" className='btn btn-primary' onClick={doSomethingAndNavigate}>Login</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;
