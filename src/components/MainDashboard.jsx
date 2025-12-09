// src/components/MainDashboard.jsx
import TaskList from './TaskList';

function MainDashboard() {
  const tasks = [
    { id: 1, title: "Сделать домашку по React", completed: false },
    { id: 2, title: "Выучить props", completed: true },
    { id: 3, title: "Отправить проект на GitHub", completed: false },
    { id: 4, title: "Сделать CSS modules", completed: false }
  ];

  return (
    <main style={{ padding: '16px' }}>
      <h2>Главная панель</h2>
      <TaskList tasks={tasks} />
    </main>
  );
}

export default MainDashboard;
