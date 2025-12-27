function BoardCard({ board }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4
                    flex flex-col gap-2
                    hover:border-blue-500 hover:shadow-lg transition">
      
      <h2 className="text-white text-lg font-semibold">
        {board.title}
      </h2>

      <p className="text-gray-400">
        {board.description}
      </p>

      <span className="text-sm text-gray-500">
        Статус: {board.status}
      </span>

      <span className="text-xs text-gray-500">
        Создано: {board.createdAt}
      </span>
    </div>
  )
}

export default BoardCard
