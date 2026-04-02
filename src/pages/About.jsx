import { useState, useEffect } from 'react';
import styles from './About.module.css';

function About() {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data => {
        setTask(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.page}>
      <h1>À propos</h1>
      <p className={styles.desc}>
        TaskApp est une application de gestion de tâches développée avec React JS.
        Elle permet d'ajouter, filtrer et supprimer des tâches avec des niveaux de priorité.
      </p>
      <div className={styles.features}>
        <div className={styles.feature}><span>✅</span><p>Ajouter des tâches avec priorité</p></div>
        <div className={styles.feature}><span>🔍</span><p>Filtrer par statut</p></div>
        <div className={styles.feature}><span>🗑️</span><p>Supprimer une tâche</p></div>
        <div className={styles.feature}><span>☑️</span><p>Marquer comme terminée</p></div>
      </div>
      <div className={styles.apiBox}>
        <h2>Exemple de tâche via API</h2>
        {loading ? (
          <p className={styles.loading}>Chargement...</p>
        ) : (
          <div className={styles.task}>
            <p><span>Titre :</span> {task.title}</p>
            <p><span>Statut :</span> {task.completed ? '✅ Terminée' : '⏳ En cours'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;