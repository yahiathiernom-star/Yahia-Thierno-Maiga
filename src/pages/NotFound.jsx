import { NavLink } from 'react-router';

function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#a020f0' }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: 'white' }}>Cette page n'existe pas</p>
      <NavLink to="/Home" style={{
        background: 'white',
        color: '#a020f0',
        padding: '0.6rem 1.5rem',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 600
      }}>
        Retour à l'accueil
      </NavLink>
    </div>
  );
}

export default NotFound;