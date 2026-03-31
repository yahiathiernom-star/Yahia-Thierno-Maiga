import styles from './MoviesList.module.css'
function MoviesList({ filmname, datedesortie, genre, syno }) {
  return (
    <div className={styles.wow}>
      <h2>Nom : {filmname}</h2>
      <h2>Date de sortie : {datedesortie}</h2>
      <h2>Genre : {genre}</h2>
      <h2>Synopsis : {syno}</h2>
    </div>
  );
}

export default MoviesList;