import React from "react";
import {add, sub, multiply, div} from './Calc';

function App(){
    return(
        <>
            <ul>
                <li>Addition of two number {add(40, 4)}</li>
                <li>Subtraction of two number is {sub(40, 4)}</li>
                <li>Multiplication of two numbers is {multiply(40, 4)}</li>
                <li>div of two numbers is {div(40, 3)}</li>
            </ul>
        </>
    )
}

export default App;