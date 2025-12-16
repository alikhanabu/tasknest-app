import { useState } from "react";
import "./index.css";

function App() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Учебная доска",
      description: "Доска для заданий по React",
      createdAt: "2025-03-15",
    },
  ]);

  const addBoard = () => {
    const newBoard = {
      id: Date.now(),
      title: "Новая доска",
      description: "Описание новой доски",
      createdAt: "2025-03-20",
    };

    setBoards([...boards, newBoard]);
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <div className="app">
      <h1>Mock-доски</h1>

      <button onClick={addBoard}>Добавить доску</button>

      {boards.map((board) => (
        <div key={board.id} className="board">
          <h2>{board.title}</h2>
          <p>{board.description}</p>
          <small>{board.createdAt}</small>
          <br />
          <button onClick={() => deleteBoard(board.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default App;
