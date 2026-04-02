import { useState, useEffect } from 'react';
import TaskCard from '../component/TaskCard';
import TaskForm from '../component/TaskForm';
import styles from './Home.module.css';

function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finir le projet React', priority: 'Haute', done: false },
    { id: 2, title: 'Réviser useEffect', priority: 'Moyenne', done: false },
    { id: 3, title: 'Pousser sur GitHub', priority: 'Haute', done: false },
  ]);

  const [filter, setFilter] = useState('Toutes');

  useEffect(() => {
    document.title = `Tâches (${tasks.filter(t => !t.done).length} restantes)`;
  }, [tasks]);

  function addTask(title, priority) {
    setTasks([...tasks, { id: Date.now(), title, priority, done: false }]);
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  const filtered = tasks.filter(t => {
    if (filter === 'Toutes') return true;
    if (filter === 'À faire') return !t.done;
    if (filter === 'Terminées') return t.done;
  });

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Mes <span>tâches</span></h1>
        <p className={styles.subtitle}>{tasks.filter(t => !t.done).length} tâche(s) restante(s)</p>
      </div>
      <TaskForm onAdd={addTask} />
      <div className={styles.filters}>
        {['Toutes', 'À faire', 'Terminées'].map(f => (
          <button key={f} className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className={styles.list}>
        {filtered.length === 0 && <p className={styles.empty}>Aucune tâche ici 👌</p>}
        {filtered.map(task => (
          <TaskCard key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default Home;