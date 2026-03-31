import styles from './UserProfile.module.css'

function UserProfile({ firstName, lastName, birthdate }) {
  return (
    <div className={styles.card}>
      <h1>Je m'appelle {firstName} {lastName}</h1>
      <h1>Voici ma date d'anniversaire : {birthdate}</h1>
    </div>
  );
}

export default UserProfile;