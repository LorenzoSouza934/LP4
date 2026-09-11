import GameList from './components/GameList';

export default function App() {
  const games = [
    {
      id: 1,
      title: "Red Dead Redemption 2",
      genre: "Ação / Velho Oeste",
      description: "Acompanhe a saga de Arthur Morgan e do bando de Van der Linde em uma épica jornada pelo coração dos Estados Unidos.",
      price: 399.90,
      image: "https://i.pinimg.com/736x/86/b9/8d/86b98d0760bbc549b05248233888f500.jpg"
    },
    {
      id: 2,
      title: "Grand Theft Auto VI",
      genre: "Ação / Mundo Aberto",
      description: "Retorne ao estado de Leonida e às ruas neon de Vice City na história de Lucia e Jason em busca do sonho americano.",
      price: 599.90,
      image: "https://i.pinimg.com/736x/df/ce/ce/dfcece6a6927a6f72d284b4f9a21cad2.jpg"
    },
    {
      id: 3,
      title: "Forza Horizon 6",
      genre: "Corrida / Simulação",
      description: "Experimente a emoção do automobilismo com centenas de carros detalhados e pistas consagradas no mundo todo.",
      price: 349.90,
      image: "https://i.pinimg.com/736x/e2/73/2f/e2732f8484632f47d313dad1d1157027.jpg"
    },
    {
      id: 4,
      title: "Grand Theft Auto V",
      genre: "Ação / Mundo Aberto",
      description: "Um golpista, um assaltante de bancos aposentado e um psicopata aterrorizante entram no submundo do crime em Los Santos.",
      price: 149.90,
      image: "https://i.pinimg.com/1200x/dc/09/8f/dc098f0532de3c000039bda2b1a4e546.jpg"
    }
  ];

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h1 style={{ color: '#bb86fc', margin: 0 }}>🎮 GameCatalog</h1>
      </header>
      
      <main>
        <GameList games={games} />
      </main>
    </div>
  );
}

const appStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  textAlign: 'center',
  backgroundColor: '#121212',
  color: '#ffffff',
  minHeight: '100vh',
  padding: '20px'
};

const headerStyle = {
  marginBottom: '20px'
};