import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc">
        <div className="display">0</div>
        <button type="button" className="button">AC</button>
        <button type="button" className="button">%</button>
        <button type="button" className="button">+/-</button>
        <button type="button" className="button dark">/</button>
        <button type="button" className="button">7</button>
        <button type="button" className="button">8</button>
        <button type="button" className="button">9</button>
        <button type="button" className="button dark">*</button>
        <button type="button" className="button">4</button>
        <button type="button" className="button">5</button>
        <button type="button" className="button">6</button>
        <button type="button" className="button dark">-</button>
        <button type="button" className="button">1</button>
        <button type="button" className="button">2</button>
        <button type="button" className="button">3</button>
        <button type="button" className="button dark">+</button>
        <button type="button" className="button base">0</button>
        <button type="button" className="button">.</button>
        <button type="button" className="button dark">=</button>
      </div>
    );
  }
}

export default Calculator;
