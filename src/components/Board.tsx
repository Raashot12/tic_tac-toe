/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react"
import swal from "sweetalert"
import Card from "./Card"
import "./Board.css"
import Heading from "./Heading"

const Board = () => {
  const defaultBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  const [values, setTogglevalues] = useState<string[]>(defaultBoard)
  const [playerTurn, setPlayerTurn] = useState<boolean>(true)
  const [disable, setToggledisable] = useState<boolean>(false)
  const [winmessage, setmessage] = useState<string>("")

  const win = (i: number): boolean => {
    let char: string = playerTurn ? "X" : "O"
    // vertical check
    if (
      values[i] === char &&
      values[(i + 3) % 9] === char &&
      values[(i + 6) % 9] === char
    ) {
      return true
    }
    // horizontal check
    let weight: number = i > 2 ? 3 : 0
    weight = i > 5 ? 6 : weight
    if (
      values[(i % 3) + weight] === char &&
      values[((i + 1) % 3) + weight] === char &&
      values[((i + 2) % 3) + weight] === char
    ) {
      return true
    }
    // diagonal check
    if (values[0] === char && values[4] === char && values[8] === char) {
      return true
    }
    if (values[2] === char && values[4] === char && values[6] === char) {
      return true
    }
    return false
  }

  const onClickCard = (i: number): void => {
    if (disable) {
      return
    }
    let data = values
    if (playerTurn && values[i] === " ") {
      data[i] = "X"
    } else if (values[i] === " ") {
      data[i] = "O"
    } else {
      return
    }
    setTogglevalues(data)
    setPlayerTurn(!playerTurn)
    // Check too see if there is no winner.
    console.log(!values.includes(""))
    if (!values.includes(" ")) {
      setmessage(`Match is Draw`)
    }
    // Check too see if there is a winner
    if (win(i)) {
      setToggledisable(true)
      setmessage(`${playerTurn ? "X" : "O"} Wins`)
      if (!playerTurn) {
        swal("Good job!", "X player to play next!", "Good luck")
      } else {
        swal("Good job!", "O player to play next!", "Good luck")
      }
    }
  }
  // Reset Function. Which clear message and sent board to default.
  const resetHandler = () => {
    setToggledisable(false)
    setTogglevalues(defaultBoard)
    setmessage("")
  }

  useEffect(() => {
    const id = setTimeout(() => {
      resetHandler()
    }, 1000)

    return () => {
      clearTimeout(id)
    }
  }, [winmessage])

  return (
    <div className="MuiContainer-root MuiContainer-maxWidthLg">
      <Heading />
      <div className="Board">
        {values.map((val, i) => (
          <span
            key={i}
            onClick={() => {
              onClickCard(i)
            }}
          >
            <Card character={val} />
          </span>
        ))}
        <h1
          className={!playerTurn ? "blue-sign win-message" : "red-sign win-message"}
        >
          {winmessage}
        </h1>
        <button onClick={resetHandler} className="btn reset-btn mt-4">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Board
