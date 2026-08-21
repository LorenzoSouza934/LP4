export default function GameCard({ game }) {
  return (
    <div style={cardStyle}>
      <img src={game.image} alt={game.title} style={imageStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{game.title}</h3>
        <p style={genreStyle}><strong>Gênero:</strong> {game.genre}</p>
        <p style={descStyle}>{game.description}</p>
      </div>
    </div>
  );
}

// Estilos em Tema Escuro (Dark Mode)
const cardStyle = {
  border: '1px solid #333',
  borderRadius: '12px',
  overflow: 'hidden',
  width: '280px',
  textAlign: 'left',
  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
  backgroundColor: '#1e1e1e',
  display: 'flex',
  flexDirection: 'column'
};

const imageStyle = {
  width: '100%',
  height: '170px',
  objectFit: 'cover'
};

const contentStyle = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const titleStyle = {
  margin: 0,
  fontSize: '1.1rem',
  color: '#f1f1f1'
};

const genreStyle = {
  fontSize: '0.85rem',
  color: '#bb86fc',
  margin: 0
};

const descStyle = {
  fontSize: '0.9rem',
  color: '#aaa',
  margin: 0,
  lineHeight: '1.4'
};