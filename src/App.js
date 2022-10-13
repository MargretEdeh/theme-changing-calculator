import React from 'react';
import { createContext, useContext } from 'react';
import './style.css';
import { useState } from 'react';
const mode = {
  blue: {
    darkShade: 'cal display1',
    equal: 'equal1',
    lighShade: ' btn operator1',
    toggle: 'toggle1',
  },
  red: {
    darkShade: 'cal display2',
    lighShade: 'btn operator2',
    equal: 'equal2',
    toggle: 'toggle2',
  },
};

const themeContext = createContext(mode.blue);

function Heading({ toggle }) {
  const themes = useContext(themeContext);

  return (
    <div className="nav">
      <p>Created with Love by Margret Edeh</p>
      <button className={themes.toggle} onClick={toggle}>
        Change Theme
      </button>
    </div>
  );
}

function Calculator() {
  const themes = useContext(themeContext);
  const [operation, setOperation] = useState('');
  const operator = ['+', '-', '/', '%', '*', '.'];
  const ShowOperation = (value) => {
    if (operator.includes(value) && operator.includes(operation.slice(-1))) {
      return;
    }

    setOperation(operation + value);
  };
  const del = () => {
    setOperation(operation.slice(0, -1));
  };
  const reset = () => {
    setOperation('');
  };
  const answer = () => {
    setOperation(eval(operation).toString());
  };
  return (
    <div className="cal-container">
      <div className="input">
        <input
          className={themes.darkShade}
          name="display"
          value={operation}
          placeholder="0"
        />
        <div className="cal">
          <button className={themes.lighShade} onClick={reset}>
            <b>A/c</b>
          </button>
          <button
            className={themes.lighShade}
            onClick={() => ShowOperation('/')}
          >
            <b>/</b>
          </button>
          <button
            className={themes.lighShade}
            onClick={() => ShowOperation('%')}
          >
            <b>%</b>
          </button>
          <button className={themes.lighShade} onClick={del}>
            <b>C</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('7')}>
            <b>7</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('8')}>
            <b>8</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('9')}>
            <b>9</b>
          </button>
          <button
            className={themes.lighShade}
            onClick={() => ShowOperation('*')}
          >
            <b>*</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('4')}>
            <b>4</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('5')}>
            <b>5</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('6')}>
            <b>6</b>
          </button>
          <button
            className={themes.lighShade}
            onClick={() => ShowOperation('-')}
          >
            <b>-</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('1')}>
            <b>1</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('2')}>
            <b>2</b>
          </button>
          <button className="btn" onClick={() => ShowOperation('3')}>
            <b>3</b>
          </button>
          <button
            className={themes.lighShade}
            onClick={() => ShowOperation('+')}
          >
            <b>+</b>
          </button>
          <button
            className="btn"
            style={{ fontSize: '21px' }}
            onClick={() => ShowOperation('.')}
          >
            .
          </button>
          <button className="btn" onClick={() => ShowOperation('0')}>
            <b>0</b>
          </button>
          <button className="btn" style={{ color: 'white' }}>
            _
          </button>

          <button className="btn operator" id={themes.equal} onClick={answer}>
            <b>=</b>
          </button>
        </div>
      </div>
    </div>
  );
}
function App() {
  const [isBlue, setIsblue] = useState(false);
  const theme = isBlue ? mode.red : mode.blue;
  const toggle = () => {
    setIsblue(!isBlue);
  };
  return (
    <themeContext.Provider value={theme}>
      <div className="App">
        <Heading toggle={toggle} />
        <Calculator />
      </div>
    </themeContext.Provider>
  );
}

export default App;
