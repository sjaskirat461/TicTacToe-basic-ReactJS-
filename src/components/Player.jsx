import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing === true) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName =
    isEditing === true ? (
      <input type="text" required value={playerName} onChange={handleChange} />
    ) : (
      <span className="player-name">{playerName}</span>
    );

  return (
    <li className={isActive === true ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing === true ? "Save" : "Edit"}
      </button>
    </li>
  );
}
