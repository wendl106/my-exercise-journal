import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
 
    // const Auth = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('/register', {
    //             email: email,
    //             password: password
    //         });
    //         navigate.push("/login");
    //     } catch (error) {
    //         const errorMessage = JSON.parse(error.request.response);
    //         console.log(errorMessage);
    //         alert(errorMessage.Error);
    //     }
    // }

    const noAuth = () => {
        alert("Sorry, we are not accepting new users at this time!");
    }

    return (
        <div>
            <h1>Register</h1>
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
                onClick={noAuth}
            >Register</button>
        </div>
    );
}

export default Register;