function Header() {
  return (
    <header className="bg-slate-800 px-6 py-4 flex items-center justify-between">
      <h1 className="text-white text-xl font-bold">
        TaskNest
      </h1>

      <nav className="flex gap-4">
        <button className="text-gray-300 hover:text-white">
          Boards
        </button>
        <button className="text-gray-300 hover:text-white">
          Profile
        </button>
        <button className="text-gray-300 hover:text-white">
          Logout
        </button>
      </nav>
    </header>
  )
}

export default Header
