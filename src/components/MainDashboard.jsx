import BoardCard from './BoardCard'

function MainDashboard({ boards }) {
  return (
    <div className="p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {boards.map(board => (
        <BoardCard key={board.id} board={board} />
      ))}
    </div>
  )
}

export default MainDashboard
