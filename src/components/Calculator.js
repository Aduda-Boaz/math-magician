import React, { Component } from 'react';
import './Calculator.css';
import maths from '../events/math';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      calculation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(button) {
    const buttonValue = button.target.textContent;
    this.setState((e) => maths(e, buttonValue));
  }

  render() {
    const { total, next, calculation } = this.state;
    return (
      <div className="calc">
        <div className="display">
          { total }
          { calculation }
          { next }
        </div>
        <button type="button" onClick={this.handleClick} className="button">AC</button>
        <button type="button" onClick={this.handleClick} className="button">%</button>
        <button type="button" onClick={this.handleClick} className="button">+/-</button>
        <button type="button" onClick={this.handleClick} className="button dark">/</button>
        <button type="button" onClick={this.handleClick} className="button">7</button>
        <button type="button" onClick={this.handleClick} className="button">8</button>
        <button type="button" onClick={this.handleClick} className="button">9</button>
        <button type="button" onClick={this.handleClick} className="button dark">*</button>
        <button type="button" onClick={this.handleClick} className="button">4</button>
        <button type="button" onClick={this.handleClick} className="button">5</button>
        <button type="button" onClick={this.handleClick} className="button">6</button>
        <button type="button" onClick={this.handleClick} className="button dark">-</button>
        <button type="button" onClick={this.handleClick} className="button">1</button>
        <button type="button" onClick={this.handleClick} className="button">2</button>
        <button type="button" onClick={this.handleClick} className="button">3</button>
        <button type="button" onClick={this.handleClick} className="button dark">+</button>
        <button type="button" onClick={this.handleClick} className="button base">0</button>
        <button type="button" onClick={this.handleClick} className="button">.</button>
        <button type="button" onClick={this.handleClick} className="button dark">=</button>
      </div>
    );
  }
}

export default Calculator;
