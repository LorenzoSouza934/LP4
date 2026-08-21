import { useState } from 'react';
import GameCard from './GameCard';

export default function GameList({ games }) {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div>
      <div style={listStyle}>
        {games.map((game) => (
          <div key={game.id} style={containerCardStyle}>
            <GameCard game={game} />
            
            <button 
              style={buttonStyle} 
              onClick={() => setSelectedGame(game)}
            >
              Ver mais informações
            </button>
          </div>
        ))}
      </div>

      {/* Modal simples em Tema Escuro para detalhar o jogo */}
      {selectedGame && (
        <div style={modalOverlayStyle} onClick={() => setSelectedGame(null)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: '#bb86fc', marginTop: 0 }}>{selectedGame.title}</h2>
            <img src={selectedGame.image} alt={selectedGame.title} style={modalImageStyle} />
            <p><strong>Gênero:</strong> {selectedGame.genre}</p>
            <p><strong>Preço:</strong> R$ {selectedGame.price.toFixed(2)}</p>
            <p style={{ color: '#ccc', lineHeight: '1.5' }}>{selectedGame.description}</p>
            <button style={closeButtonStyle} onClick={() => setSelectedGame(null)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  justifyContent: 'center',
  padding: '20px'
};

const containerCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '12px'
};

const buttonStyle = {
  width: '100%',
  padding: '10px 12px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#bb86fc',
  color: '#121212',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: '0.2s',
  fontSize: '0.9rem'
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalContentStyle = {
  backgroundColor: '#252525',
  padding: '24px',
  borderRadius: '12px',
  maxWidth: '450px',
  width: '90%',
  color: '#fff',
  textAlign: 'left',
  boxShadow: '0 8px 24px rgba(0,0,0,0.8)'
};

const modalImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '12px'
};

const closeButtonStyle = {
  marginTop: '16px',
  padding: '10px 16px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#cf6679',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 'bold',
  width: '100%'
};