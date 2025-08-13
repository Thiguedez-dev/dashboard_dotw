import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import logo_branca from './assets/logo_branca.png';

function App() {
    const [hover, setHover] = useState(false);
    const navegar = useNavigate();

    const fundoInicio = {
        backgroundColor: '#CDD5C6',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Questrial'
    };

    const h1_inicio = {
        fontSize: '30px'
    };

    const button_começar = {
        backgroundColor: hover ? '#5d94bb' : '#7CAFD3',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        cursor: hover ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        border: '5px solid white',
        minHeight: '10vh',
        width: '17vw',
        fontFamily: 'Questrial',
        borderRadius: '20px',
        color: 'white',
        fontSize: '20px',
    };

    return (
        <div className="App" style={fundoInicio}>
            <section>
                <img src={logo_branca} />
                <h1 style={h1_inicio}>O futuro da sua casa começa aqui.</h1>
                <button
                    style={button_começar}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => navegar('/dashboard')} // ⬅️ Adicionado aqui
                >
                    Começar Já
                </button>
            </section>
        </div>
    );
}

export default App;
