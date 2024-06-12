import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [captcha, setCaptcha] = useState('');
    const [inputCaptcha, setInputCaptcha] = useState('');
    const [showCaptchaModal, setShowCaptchaModal] = useState(false);

    const generateCaptcha = () => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars[Math.floor(Math.random() * chars.length)];
        }
        return captcha;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            setCaptcha(generateCaptcha());
            setShowCaptchaModal(true);
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const handleCaptchaSubmit = (e) => {
        e.preventDefault();
        if (inputCaptcha === captcha) {
            setIsLoggedIn(true);
            setShowCaptchaModal(false);
        } else {
            alert('CAPTCHA incorrecto');
        }
    };

    return (
        <>
            {!isLoggedIn ? (
                <div id='App' className="login-container">
                    <h1>Inicio de Sesion</h1>
                    <h2>Bienvenido a </h2>
                    <img src="src/assets/GasLogo.png" alt="Login Image" />
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username">Usuario: </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña: </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Iniciar Sesion</button>
                    </form>
                    <Link to="/registro/1">Registrarse</Link>

                    {showCaptchaModal && (
                        <div className="captcha-modal">
                            <div className="captcha-content">
                                <h2>Ingrese el texto <br/>para completar el Captcha</h2>
                                <p>{captcha}</p>
                                <form onSubmit={handleCaptchaSubmit}>
                                    <input
                                        type="text"
                                        value={inputCaptcha}
                                        onChange={(e) => setInputCaptcha(e.target.value)}
                                        required
                                    />
                                    <button type="submit">No soy un Robot</button>
                                </form>
                            </div>
                        </div>
                    )}
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
