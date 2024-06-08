import React, { useState } from 'react';
import './App.css';

function App() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [country, setCountry] = useState('');

    // Manejadores de cambios para cada campo de entrada
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleNameChange = (e) => setName(e.target.value);
    const handleCellphoneChange = (e) => setCellphone(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);

    // Manejador de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar los datos del formulario, por ejemplo, enviarlos a un servidor
        console.log('Datos del usuario:', { email, name, cellphone, country });
    };

    return (
        <div>
            <h1>Almacenar datos del Usuario</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input
                        type="text"
                        id="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input
                        type="text"
                        id="Name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Cellphone">Cellphone number:</label>
                    <input
                        type="text"
                        id="Cellphone"
                        value={cellphone}
                        onChange={handleCellphoneChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Country">Country:</label>
                    <input
                        type="text"
                        id="Country"
                        value={country}
                        onChange={handleCountryChange}
                        required
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default App;
