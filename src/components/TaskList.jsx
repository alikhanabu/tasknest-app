// src/components/TaskList.jsx
import styles from './TaskList.module.css';

function TaskList({ tasks }) {
  // tasks приходит через props
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Список задач</h3>
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id} className={styles.item}>
            <span className={task.completed ? styles.done : ''}>
              {task.title}
            </span>
            <span className={styles.status}>
              {task.completed ? '✔️' : '❌'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
