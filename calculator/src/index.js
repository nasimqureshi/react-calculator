import React from 'react';
import ReactDOM from 'react-dom';
import add from './Calc';


ReactDOM.render(
  <>
    <ul>
      <li>The sum of two numbers is {add(40, 4)}</li>
    </ul>
  </>,
   document.getElementById('root')
);

