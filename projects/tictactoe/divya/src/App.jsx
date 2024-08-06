import { useState } from "react";

function App() {
  const [cardContent,setCardContent] = useState('')
  const [player, setPlayer] = useState("O");
  const [boxElement, setBoxElement] = useState(Array(9).fill(""));
  const [visible,setVisible] = useState('hidden')
  const handleClick = (index) => {
    if (boxElement[index] === "") {
      const newBoard = [...boxElement];
      newBoard[index] = player;
      setBoxElement(newBoard);

      if (win(newBoard)) {
        setVisible('block')
        setCardContent('Game Over ')
      } else if (draw(newBoard)) {
        setVisible('block')
        setCardContent('Its Draw !')
      } else {
        setPlayer(player === "X" ? "O" : "X");
      }
    }
  };

  const win = (box) => {
    const Patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < Patterns.length; i++) {
      const [a, b, c] = Patterns[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        return true;
      }
    }
    return false;
  };

  const draw = (box) => {
    for (let i = 0; i < box.length; i++) {
      if (box[i] == "") {
        return false;
      }
    }
    return true;
  };

  const reset = () => {
    setBoxElement(Array(9).fill(""));
    setPlayer("O");
    setVisible('hidden')
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-800 text-white font-sans overflow-hidden">
        <h1 className="m-24 text-center text-[100px]">
          Tic Tac Toe <br />
          <span className="text-blue-500 text-xxl">Using React Js</span>
        </h1>
        <div className="container w-[610px] h-[610px] bg-teal-600 border-4 border-gray-300 grid grid-cols-[auto_auto_auto]">
          {boxElement.map((box, index) => (
            <div
              key={index}
              className="w-[200px] h-[200px] border-2 border-black flex justify-center items-center text-6xl cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {box}
            </div>
          ))}
        </div>
        <div className={`w-[600px] h-[300px] bg-white ${visible} rounded-xl absolute flex flex-col justify-center items-center`}>
           <h2 className="text-black text-[40px]">{cardContent}</h2>
           <button onClick={reset} className="bg-green-600 py-[10px] px-[20px] rounded-xl border-[2px] m-4 border-black">Restart</button>
        </div>
      </div>
    </>
  );
}

export default App;