import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://myexercisejournal.herokuapp.com/login', {
                email: email,
                password: password
            })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                navigate("/");
            })
        }
        catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
                alert(msg);
            }
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)} />
            <button
                onClick={Auth}
            >Login</button>
        </div>
    );
}

export default Login;