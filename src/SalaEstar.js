import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import voltar from './assets/volte (1).png';
import lampada from './assets/lampada-incandescente.png';

export default function SalaEstar() {
    const navigate = useNavigate();

    // 1. Estados para armazenar os dados
    const [dadosSala, setDadosSala] = useState(null);
    const [carregando, setCarregando] = useState(true);

    // 2. useEffect para fazer a requisição quando o componente é montado
    useEffect(() => {
        const buscarDados = async () => {
            try {
                const resposta = await fetch('/dadosResidencia.json');
                const dadosJson = await resposta.json();

                // Armazena apenas os dados da sala de estar
                setDadosSala(dadosJson.residencia.sala_de_estar);
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

    // Estilos CSS
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
        height: '80vh',
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

    const lampadacss = {
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

    // Renderização condicional enquanto os dados estão carregando
    if (carregando) {
        return <div style={fundo}>Carregando...</div>;
    }

    // Renderização se não houver dados ou dispositivos
    if (!dadosSala || !dadosSala.dispositivos) {
        return <div style={fundo}>Nenhum dispositivo encontrado na sala de estar.</div>;
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
                <h1 style={titulo}>{dadosSala.nome}</h1>
            </header>
            <main style={main}>
                <section style={cardContainer}>
                    {/* Mapeia a lista de dispositivos para criar um card para cada um */}
                    {dadosSala.dispositivos.map(dispositivo => (
                        <div key={dispositivo.id} style={cardBase}>
                            <h2 style={tituloscards}>{dispositivo.nome}</h2>
                            {dispositivo.tipo === 'luz' && (
                                <>
                                    {/* <img src={lampada} style={lampadacss} alt="Lâmpada" /> */}
                                    <p style={txtcards}>Intensidade: {dispositivo.estado.intensidade}%</p>
                                    <p style={txtcards}>Cor: {dispositivo.estado.cor}</p>
                                    <p style={txtcards}>Status: {dispositivo.estado.ligado ? 'Ligado' : 'Desligado'}</p>
                                </>
                            )}
                            {dispositivo.tipo === 'smart_tv' && (
                                <>
                                    <p style={txtcards}>Volume: {dispositivo.estado.volume}</p>
                                    <p style={txtcards}>App: {dispositivo.estado.canal_app}</p>
                                    <p style={txtcards}>Status: {dispositivo.estado.ligado ? 'Ligado' : 'Desligado'}</p>
                                </>
                            )}
                            {dispositivo.tipo === 'ar_condicionado' && (
                                <>
                                    <p style={txtcards}>Temperatura: {dispositivo.estado.temperatura}°C</p>
                                    <p style={txtcards}>Modo: {dispositivo.estado.modo}</p>
                                    <p style={txtcards}>Status: {dispositivo.estado.ligado ? 'Ligado' : 'Desligado'}</p>
                                </>
                            )}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}