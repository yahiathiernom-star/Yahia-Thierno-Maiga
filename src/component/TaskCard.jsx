import styles from './TaskCard.module.css';

function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className={`${styles.card} ${task.done ? styles.done : ''}`}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className={styles.checkbox}
        />
        <div>
          <p className={styles.title}>{task.title}</p>
          <span className={`${styles.priority} ${styles[task.priority.toLowerCase()]}`}>
            {task.priority}
          </span>
        </div>
      </div>
      <button className={styles.delete} onClick={() => onDelete(task.id)}>✕</button>
    </div>
  );
}

export default TaskCard;