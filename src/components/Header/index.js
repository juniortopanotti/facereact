import React, { Component } from 'react';
import './style.css';

import facebookLogo from '../../assets/facebook.png'

class Header extends Component {

  render() {
    return (
      <header id="main-header">
        <img src={facebookLogo}/>
        <div>
          <span>
            Meu perfil
          </span>
          <i className="material-icons">account_circle</i>
        </div>
      </header>
    );
  }
}

export default Header;