import React, { Component } from 'react';
import './container.css';
import Board from '../board/board';

class Container extends Component {
    state = { 
        skateBoards: {Boards:false , Decks:false, sketeboard:true, own:false, trucks:false},  
     }

     handleBoardTypes = () => {
         let skateboards = !this.state.skateBoards.Boards;
         this.setState({ skateBoards: {Boards:skateboards, Decks:false, sketeboard:false, own:false, trucks:false} });
        console.log(skateboards)
     }

     handleShowBoards = () => {
        let sketeboard = !this.state.skateBoards.sketeboard;
        this.setState({ skateBoards: {Boards:true, Decks:false, sketeboard:sketeboard, own:false, trucks:false} });
     }

    render() { 
    
        return ( 
            <div className='container'>
                <div className='boardTypes'>
                    <div>
                    <button onClick={this.handleBoardTypes}>SKATEBOARDS</button><br/>
                        {this.state.skateBoards.Boards === true && 
                        <div className='categories'>
                            <button>Decks</button><br/>
                            <button onClick={this.handleShowBoards}>Complete sketeboards</button><br/>
                            <button>Build your own</button><br/>
                            <button>Trucks</button>
                        </div>}
                    </div>
                    <button>LONGBOARDS</button><br/>
                    <button>ACCESSORIES</button><br/>
                    <button>BRANDS</button>
                </div>
                <div className='boards'>
                   {this.state.skateBoards.sketeboard === true ? (<Board />) : <h1>These products are not available right now.</h1>}
                </div>
            </div>
         );
    }
}
 
export default Container;