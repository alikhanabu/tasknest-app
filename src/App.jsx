import { useState } from 'react'
import Header from './components/Header'
import MainDashboard from './components/MainDashboard'

function App() {
  const [boards] = useState([
    {
      id: 1,
      title: 'Учебная доска',
      description: 'Задания и конспекты по React',
      status: 'Активная',
      createdAt: '2025-03-15'
    },
    {
      id: 2,
      title: 'Проект',
      description: 'Работа над демо-проектом',
      status: 'Активная',
      createdAt: '2025-03-18'
    },
    {
      id: 3,
      title: 'Архив',
      description: 'Завершённые задачи',
      status: 'Архивная',
      createdAt: '2025-03-01'
    }
  ])

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <MainDashboard boards={boards} />
    </div>
  )
}

export default App
