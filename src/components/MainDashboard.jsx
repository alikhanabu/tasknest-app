import './MainDashboard.scss'

function MainDashboard({ boards }) {
  return (
    <div className="dashboard grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {boards.map(board => (
        <div
          key={board.id}
          className="board bg-slate-800 border border-slate-700
                     flex flex-col gap-2
                     hover:border-blue-500 hover:shadow-lg transition"
        >
          <h2 className="text-white text-lg font-semibold">
            {board.title}
          </h2>
          <p className="text-gray-400">
            {board.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default MainDashboard
