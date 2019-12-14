import React, { Component } from 'react'
import './DialPad.css'

class DialPad extends Component {

  state = {
    display: ''
  }

  handleClick = event => {
    if (event.target.classList.contains('span')) {
      this.setState({display: (""+this.state.display+event.target.parentElement.getAttribute('value')).slice(0, 15)})
    } else {
      this.setState({display: (""+this.state.display+event.target.getAttribute('value')).slice(0, 15)})
    }
  }

  render () {
    return (
      <span>
        <span className="display">
          {this.state.display}
        </span>
        <span className="keyboard">
          <span className="keypad" value="1" onClick={this.handleClick}>1<span className="span hidden">ABC</span></span>
          <span className="keypad" value="2" onClick={this.handleClick}>2<span className="span">ABC</span></span>
          <span className="keypad" value="3" onClick={this.handleClick}>3<span className="span">DEF</span></span>
          <span className="keypad" value="4" onClick={this.handleClick}>4<span className="span">GHI</span></span>
          <span className="keypad" value="5" onClick={this.handleClick}>5<span className="span">JKL</span></span>
          <span className="keypad" value="6" onClick={this.handleClick}>6<span className="span">MNO</span></span>
          <span className="keypad" value="7" onClick={this.handleClick}>7<span className="span">PQRS</span></span>
          <span className="keypad" value="8" onClick={this.handleClick}>8<span className="span">TUV</span></span>
          <span className="keypad" value="9" onClick={this.handleClick}>9<span className="span">WXYZ</span></span>
          <span className="keypad" value="*" onClick={this.handleClick}>*<span className="span hidden">ABC</span></span>
          <span className="keypad" value="0" onClick={this.handleClick}>0<span className="span hidden">ABC</span></span>
          <span className="keypad" value="#" onClick={this.handleClick}>#<span className="span hidden">ABC</span></span>
        </span>
      </span>
    )
  }

}

export default DialPad
