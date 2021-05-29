import React, { Component } from 'react';
import './board.css';
import board1 from '../pictures/copy1.png';
import board2 from '../pictures/copy2.png';

class Board extends Component {
    state = {
        boards: [            
            {picture: board1, title: 'Almost Wonder Woman Color Mild Complete', new: false, size: '7.0 X 29', price: '$74.99'},
            {picture: board2, title: 'Almost Harley Quinn Complete', new: true, size: '7.0 X 29', price: '$128.00'},
            {picture: board1, title: 'Almost Harley Quinn Complete', new: false, size: '7.0 X 29', price: '$64.99'},
            {picture: board2, title: 'Almost Organic Complete', new: false, size: '7.0 X 29', price: '$69.99'},
            {picture: board1, title: 'Almost Wonder Woman Color Mild Complete', new: false, size: '7.0 X 29', price: '$89.99'},
            {picture: board2, title: 'Blind Matt OG Yellow/Green Complete', new: true, size: '7.0 X 29', price: '$84.99'}
        ]
     }
    render() { 
        return (             
            <div className='mainBoard'>

                {this.state.boards.map(board => (
                    <div className='board'>
                    <img src={board.picture} alt="My board" width='75px'/>
                    <div className='content'>
                        {board.new === true ? <span>NEW</span> : ''}
                        <h3>{board.title}</h3>
                        <p>{board.size}</p>
                        <h2>{board.price}</h2>
                    </div>
                </div>
                ))}
            </div>
            
         );
    }
}
 
export default Board;