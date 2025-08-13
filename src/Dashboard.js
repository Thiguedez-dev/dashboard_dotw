import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // IMPORTANTE
import sala from './assets/sala-de-estar.png';
import cozinha from './assets/spoon-and-fork (1).png';
import elevacao from './assets/elevacao.png';
import dormindo from './assets/sleeping.png';
import banho from './assets/bath.png';
import garagem from './assets/private-garage.png';

function App() {
    const [hoverCard, setHoverCard] = useState(null);
    const navigate = useNavigate(); // Hook para mudar de tela

    const fundo = {
        backgroundColor: '#CDD5C6',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Questrial',
    };

    const titulo = {
        textAlign: 'center',
        fontSize: '32px',
        marginBottom: '40px',
        color: '#fff',
    };

    const grid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        margin: '0 auto',
    };

    const baseCard = {
        backgroundColor: '#FBF2ED',
        border: '4px solid #D8C2B5',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    };

    const nomeCard = {
        marginTop: '10px',
        fontSize: '18px',
        color: '#9F8F87',
        borderTop: '3px solid #D8C2B5',
        paddingTop: '10px',
        textAlign: 'center',
        width: '70%',
    };

    const imagem = {
        width: '200px',
    };

    const getCardStyle = (index) => {
        return {
            ...baseCard,
            transform: hoverCard === index ? 'scale(1.05)' : 'scale(1)',
        };
    };

    return (
        <div style={fundo}>
            <h1 style={titulo}>Painel de Controle</h1>

            <div style={grid}>
                <div
                    style={getCardStyle(1)}
                    onMouseEnter={() => setHoverCard(1)}
                    onMouseLeave={() => setHoverCard(null)}
                    onClick={() => navigate('/SalaEstar')} // Redireciona
                >
                    <img src={sala} style={imagem} />
                    <div style={nomeCard}>Sala de Estar</div>
                </div>

                <div
                    style={getCardStyle(2)}
                    onMouseEnter={() => setHoverCard(2)}
                    onMouseLeave={() => setHoverCard(null)}
                    onClick={() => navigate('/Cozinha')}
                >
                    <img src={cozinha} style={imagem} />
                    <div style={nomeCard}>Cozinha</div>
                </div>

                <div
                    style={getCardStyle(3)}
                    onMouseEnter={() => setHoverCard(3)}
                    onMouseLeave={() => setHoverCard(null)}
                    onClick={() => navigate('/Quarto')}
                >
                    <img src={dormindo} style={imagem} />
                    <div style={nomeCard}>Quarto</div>
                </div>

                <div
                    style={getCardStyle(4)}
                    onMouseEnter={() => setHoverCard(4)}
                    onMouseLeave={() => setHoverCard(null)}
                    onClick={() => navigate('/Banheiro')}
                >
                    <img src={banho} style={imagem} />
                    <div style={nomeCard}>Banheiro</div>
                </div>

                {/* <div
                    style={getCardStyle(5)}
                    onMouseEnter={() => setHoverCard(5)}
                    onMouseLeave={() => setHoverCard(null)}
                    onClick={() => navigate('/Garagem')}
                >
                    <img src={garagem} style={imagem} />
                    <div style={nomeCard}>Garagem</div>
                </div>

                <div
                    style={getCardStyle(6)}
                    onMouseEnter={() => setHoverCard(6)}
                    onMouseLeave={() => setHoverCard(null)}
                    onClick={() => navigate('/DadosAgregados')}
                >
                    <img src={elevacao} style={imagem} />
                    <div style={nomeCard}>Dados Agregados</div>
                </div> */}
            </div>
        </div>
    );
}

export default App;
