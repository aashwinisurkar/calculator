import React, { useState } from 'react'
import CalWrapper from '../calwrapper/CalWrapper'

const Calsi = () => {

const [inputVal, setInputVal] = useState(0);
    // const allBtnArr={
    //     {value:0, btfun: () =>{console.log(0)}};
    //     {value:1, btfun: () =>{console.log(1)}};
    //     {value:2, btfun: () =>{console.log(2)}};
    //     {value:3, btfun: () =>{console.log(3)}};
    //     {value:4, btfun: () =>{console.log(4)}};
    //     {value:5, btfun: () =>{console.log(5)}};
    //     {value:6, btfun: () =>{console.log(6)}};
    // }
  return (
    <div>
  <CalWrapper/>
        </div>
  )
}

export default Calsi