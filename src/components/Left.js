import React from 'react'

export default function Left({restartGame, icon, name, changeTheme}) {
  return (
    <div className='left'> 
      <div className='title '>
        <h1> Let's play </h1>
        <h1> Tic-Tac-Toe!  </h1>
        <h1> Game On! </h1>
      </div>

      <div onClick = {restartGame} className='restart'> 
        Start a New Game 
      </div>

      <div className='theme'> 
      <p> {name} </p>
      <img onClick = {changeTheme} src = {icon} /> 
      </div>
      


</div>
  )
}
