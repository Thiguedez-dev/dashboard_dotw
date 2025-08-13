import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import voltar from './assets/volte (1).png';
import lampada from './assets/lampada-incandescente.png';
// import arCondicionado from './assets/ar-condicionado.png'; // Exemplo de um novo ícone

export default function QuartoCasal() {
    const navigate = useNavigate();
    const [ambiente, setAmbiente] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscarDados = async () => {
            try {
                const res = await fetch("/dadosResidencia.json");
                const data = await res.json();
                setAmbiente(data.residencia.quarto_casal);
            } catch (error) {
                console.error("Erro ao carregar os dados:", error);
            } finally {
                setCarregando(false);
            }
        };
        buscarDados();
    }, []);

    const handleVoltar = () => {
        navigate(-1);
    };

    // Estilos CSS reutilizados
    const fundo = {
        backgroundColor: '#CDD5C6',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Questrial',
    };
    const titulo = {
        color: 'white',
    };
    const header = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '60px',
    };
    const voltarcss = {
        width: '40px',
        cursor: 'pointer',
        position: 'absolute',
        left: '20px',
    };
    const main = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        minHeight: '80vh',
    };
    const cardBase = {
        backgroundColor: '#FBF2ED',
        border: '5px solid #D8C2B5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '230px',
        width: '320px',
        borderRadius: '10px',
        gap: '10px',
        padding: '15px',
    };
    const imgCss = {
        width: '100px',
    };
    const tituloscards = {
        color: '#FFCFB3',
        fontSize: '30px',
        margin: '0',
    };
    const txtcards = {
        color: '#A2A3A2',
        fontSize: '20px',
        margin: '0',
    };
    const cardContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1200px',
    };

    if (carregando) {
        return <div style={fundo}>Carregando...</div>;
    }

    if (!ambiente || !ambiente.dispositivos) {
        return <div style={fundo}>Nenhum dispositivo encontrado no quarto do casal.</div>;
    }

    return (
        <div style={fundo}>
            <header style={header}>
                <img
                    src={voltar}
                    alt="Voltar"
                    onClick={handleVoltar}
                    style={voltarcss}
                />
                <h1 style={titulo}>{ambiente.nome}</h1>
            </header>
            <main style={main}>
                <section style={cardContainer}>
                    {ambiente.dispositivos.map(dispositivo => (
                        <div key={dispositivo.id} style={cardBase}>
                            <h2 style={tituloscards}>{dispositivo.nome}</h2>
                            {dispositivo.tipo === 'luz' && (
                                <>
                                    {/* <img src={lampada} style={imgCss} alt="Lâmpada" /> */}
                                    <p style={txtcards}>Intensidade: {dispositivo.estado.intensidade}%</p>
                                    <p style={txtcards}>Status: {dispositivo.estado.ligado ? 'Ligado' : 'Desligado'}</p>
                                    <p style={txtcards}>Consumo: {dispositivo.estado.consumoWatts} W</p>
                                </>
                            )}
                            {dispositivo.tipo === 'ar_condicionado' && (
                                <>
                                    {/* <img src={arCondicionado} style={imgCss} alt="Ar Condicionado" /> */}
                                    <p style={txtcards}>Temperatura: {dispositivo.estado.temperatura}°C</p>
                                    <p style={txtcards}>Modo: {dispositivo.estado.modo}</p>
                                    <p style={txtcards}>Status: {dispositivo.estado.ligado ? 'Ligado' : 'Desligado'}</p>
                                    <p style={txtcards}>Consumo: {dispositivo.estado.consumoWatts} W</p>
                                </>
                            )}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}