import React from 'react'
import '../ChessPage.css'

export const ChessItem = ({row}) => {
    const columns = [0, 1, 2, 3, 4, 5, 6, 7];

    const condition = ( row, column) => { 
        const module = (row + column)%2 ===0;
        return module;
     } 
  return (
    <div className='containers-rows'>
        {columns.map(column => (
            <div className={condition(row, column)?'space-black':'space-white'} key= {`${row}${column}`}> </div>
        ))}
    </div>
  )
}
