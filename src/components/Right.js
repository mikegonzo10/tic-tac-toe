import React from 'react'

export default function Right( {theme}) {
  return (
    <div className='right'>
    <div className='game'>
        <div className='header'> 
            <div className='player-X active'>
                <span> Player X </span>
            </div>
            <div className='player-O active'>
                <span> Player O </span>
            </div>
        </div>
        <div className='board'> 
            <div className={`board-tile ${theme}`} data-index = "0"> </div>
            <div className = {`board-tile ${theme}`} data-index = "1"> </div>
            <div className={`board-tile ${theme}`} data-index = "2"> </div>
            <div className={`board-tile ${theme}`} data-index = "3"> </div>
            <div className={`board-tile ${theme}`} data-index = "4"> </div>
            <div className={`board-tile ${theme}`} data-index = "5"> </div>
            <div className={`board-tile ${theme}`} data-index = "6"> </div>
            <div className={`board-tile ${theme}`} data-index = "7"> </div>
            <div className={`board-tile ${theme}`} data-index = "8"> </div>
        </div>
    </div>
  </div>
  )
}
