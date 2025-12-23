import './MainDashboard.scss'

function MainDashboard({ boards }) {
  return (
    <div className="dashboard">
      {boards.map(board => (
        <div key={board.id} className="board">
          <h2 className="board-title">{board.title}</h2>
          <p className="board-desc">{board.description}</p>
        </div>
      ))}
    </div>
  )
}

export default MainDashboard
