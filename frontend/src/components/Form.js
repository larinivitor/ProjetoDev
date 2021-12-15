import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault()

        axios.post(`http://localhost:3333/login`, {
            username,
            password
        })
        .then(res => {
            if(res.data !== null) {
                history.push('/dashboard');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div>
                Nome: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                Senha: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}