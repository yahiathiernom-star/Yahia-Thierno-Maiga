import { useState } from 'react';
import styles from './TaskForm.module.css';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Moyenne');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, priority);
    setTitle('');
    setPriority('Moyenne');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={styles.select}
      >
        <option value="Haute">🔴 Haute</option>
        <option value="Moyenne">🟡 Moyenne</option>
        <option value="Basse">🟢 Basse</option>
      </select>
      <button type="submit" className={styles.btn}>Ajouter</button>
    </form>
  );
}

export default TaskForm;