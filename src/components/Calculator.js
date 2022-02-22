import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="display">0</div>
        <button type="button" className="button">AC</button>
        <button type="button" className="button">%</button>
        <button type="button" className="button">+/-</button>
        <button type="button" className="button orange">/</button>
        <button type="button" className="button">7</button>
        <button type="button" className="button">8</button>
        <button type="button" className="button">9</button>
        <button type="button" className="button orange">*</button>
        <button type="button" className="button">4</button>
        <button type="button" className="button">5</button>
        <button type="button" className="button">6</button>
        <button type="button" className="button">-</button>
        <button type="button" className="button">1</button>
        <button type="button" className="button">2</button>
        <button type="button" className="button">3</button>
        <button type="button" className="button orange">+</button>
        <button type="button" className="button">0</button>
        <button type="button" className="button">.</button>
        <button type="button" className="button orange">=</button>
      </div>
    );
  }
}

export default Calculator;
