import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initialName)
  const [editing, setEditing] = useState(false)

  const updateEditing = () => {
    setEditing((edit) => !edit)
    if (editing) {
      onChangeName(symbol, playerName)
    }
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
    <li className={ isActive ? "active" : "" }>
      <span className="player">
        {/* { editing ? <input type="text" placeholder={name} /> : <span className="player-name">{name}</span> } */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={updateEditing}>{btnCaption}</button>
    </li>
  )
}
