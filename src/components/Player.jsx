import { useState } from "react"

export default function Player({initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName)
  const [editing, setEditing] = useState(false)

  const updateEditing = () => {
    // NEVER DO THIS AGAIN !!
    // setEditing(!editing)
    // INSTEAD DO:
    setEditing((edit) => !edit)
  }

  const handleChange = (event) => {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  let btnCaption = "Edit"
  if(editing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange}/>
    btnCaption="Save"
  }

  return (
    <li>
      <span className="player">
        {/* { editing ? <input type="text" placeholder={name} /> : <span className="player-name">{name}</span> } */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={updateEditing}>{btnCaption}</button>
    </li>
  )
}
