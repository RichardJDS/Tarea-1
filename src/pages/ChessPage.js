import React from 'react'
import './ChessPage.css'
import { ChessItem } from './components/ChessItem';

export const ChessPage = () => {

  const rows = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className='container-page'>
      <div className='container-chess'>

      <h1>Chess Page</h1>

      <div className='row-chess'>
        {rows.map(row=>(
          <ChessItem row={row} key={row}/>
        ))}
      </div>
      </div>
    </div>
  )
}
