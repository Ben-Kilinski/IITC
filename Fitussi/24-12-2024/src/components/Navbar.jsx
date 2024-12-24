import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{ margin: 0, padding: 0 }}>
            <nav
                style={{
                    position: "absolute", // Coloca a navbar sobre a imagem
                    top: 0,
                    left: 0,
                    width: "20%", // Ocupa toda a largura
                    backgroundColor: "rgba(0, 0, 0, 0)", // Fundo semi-transparente
                    color: "white", // Texto branco
                    display: "flex",
                    justifyContent: "space-around", // Espaça os links uniformemente
                    padding: "1rem 0",
                    zIndex: 10, // Garante que a navbar esteja acima da imagem
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}
            >
                <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
                <Link to="/about" style={{ margin: '0 10px', color: '#fff' }}>About</Link>
                <Link to="/pokemons" style={{ margin: '0 10px', color: '#fff' }}>Pokemons</Link>
            </nav>

            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "220px", // Altura do banner
                    overflow: "hidden",
                }}
            >
                <img
                    src="https://wallpaperaccess.com/full/4167709.gif" // Substitua pela URL da sua imagem
                    alt="Pikachu Banner"
                    style={{
                        width: "100%", // Faz a imagem ocupar toda a largura
                        height: "100%", // Faz a imagem preencher o container verticalmente
                        objectFit: "cover", // Garante que a imagem preencha o espaço sem distorção
                    }}
                />
            </div>
        </div>
    );
}

export default Navbar;