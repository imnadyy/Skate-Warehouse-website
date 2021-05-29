import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    state = {  }
    render() { 
        return (
              <header className='header'>
                <div className='brand'>
                  <h1>SKATE</h1>
                  <h3>WAREHOUSE</h3>
                </div>
                <div className='options'>
                  <div className='wishlist'>
                    <button>🛒</button>
                    <button>WISH LIST</button>
                  </div>
                  <div className='login'>
                    <button>🔍 SEARCH</button>
                    <button>SUPPORT</button>
                    <button>GIFT CARD</button>
                    <button>LOGIN</button>
                  </div>
                </div>
              </header> 
           );
    }
}
 
export default Header;