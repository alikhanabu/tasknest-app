import { useState } from "react"
import Header from "./components/Header"
import MainDashboard from "./components/MainDashboard"

function App() {
  const [boards] = useState([
    { id: 1, title: "Мой проект", description: "Описание проекта" },
    { id: 2, title: "Учеба", description: "Домашние задания" },
    { id: 3, title: "React", description: "Практика и компоненты" },
  ])

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <MainDashboard boards={boards} />
    </div>
  )
}

export default App
