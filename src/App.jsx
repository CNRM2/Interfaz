import { useState } from 'react';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <>
            {!isLoggedIn ? (
                <div className="login-container">
                    <img src="src/assets/GasLogo.png" alt="Login Image" />
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username">User: </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1>Prueba Branch Javier, {username}!</h1>
                </div>
            )}
        </>
    );
}

export default App;