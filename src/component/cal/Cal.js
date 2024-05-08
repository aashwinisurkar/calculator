import React, { useState } from "react";
import CalWrap from "../calwrapper/CalWrap";


const Cal = () => {
  const [inputVal, setInputVal] = useState(0);
  const [opVal, setOpVal] = useState(0);
  const [currentOp, setCurrentOp] = useState("");
  const BtnArr = [
    {
      value: "AC",
      btnFun: () => {
        setCurrentOp("");
        setOpVal("");
        setInputVal(0);
      },
    },
    {
      value: "DEL",
      btnFun: () => {
        setInputVal((preVal) => {
          const newval = parseInt(preVal.toString().slice(0, -1));
          return isNaN(newval) ? 0 : newval;
        });
      },
    },
    {
      value: "x2",
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal * preVal));
      },
    },
    {
      value: " % ",
      btnFun: () => {
        setInputVal((inputVal / opVal) * 100);
      },
    },

    {
      value: 0,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 0));
      },
    },
    {
      value: 1,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 1));
      },
    },
    {
      value: 2,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 2));
      },
    },
    {
      value: 3,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 3));
      },
    },
    {
      value: 4,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 4));
      },
    },
    {
      value: 5,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 5));
      },
    },
    {
      value: 6,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 6));
      },
    },
    {
      value: 7,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 7));
      },
    },
    {
      value: 8,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 8));
      },
    },
    {
      value: 9,
      btnFun: () => {
        setInputVal((preVal) => parseInt(preVal.toString() + 9));
      },
    },
    {
      value: "+",
      btnFun: () => {
        setCurrentOp("+");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "-",
      btnFun: () => {
        setCurrentOp("-");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "*",
      btnFun: () => {
        setCurrentOp("*");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "/",
      btnFun: () => {
        setCurrentOp("/");
        setOpVal(inputVal);
        setInputVal(0);
      },
    },
    {
      value: "=",
      btnFun: () => {
        // if (currentOp === "+") {

        //   setInputVal( (preVal)=>{

        //    return preVal + opVal
        //   })

        // } else {
        //   console.log(inputVal)
        // }

        switch (currentOp) {
          case "+":
            setInputVal((preVal) => {
              return preVal + opVal;
            });
            break;

          case "-":
            setInputVal((preVal) => {
              return opVal - preVal;
            });
            break;

          case "*":
            setInputVal((preVal) => {
              return opVal * preVal;
            });
            break;

          case "/":
            setInputVal((preVal) => {
              return opVal / preVal;
            });
            break;

          default:
            break;
        }
      },
    },
  ];
  //  for understanding seprated operation code

  // const opArr = [
  //   {
  //     value: "+",
  //     btnFun: () => {
  //       setCurrentOp("+");
  //       setOpVal(inputVal);
  //       setInputVal(0);
  //     },
  //   },
  //   {
  //     value: "-",
  //     btnFun: () => {
  //       setCurrentOp("-");
  //       setOpVal(inputVal);
  //       setInputVal(0);
  //     },
  //   },
  //   {
  //     value: "*",
  //     btnFun: () => {
  //       setCurrentOp("*");
  //       setOpVal(inputVal);
  //       setInputVal(0);
  //     },
  //   },
  //   {
  //     value: "/",
  //     btnFun: () => {
  //       setCurrentOp("/");
  //       setOpVal(inputVal);
  //       setInputVal(0);
  //     },
  //   },
  //   {
  //     value: "=",
  //     btnFun: () => {
  //       // if (currentOp === "+") {

  //       //   setInputVal( (preVal)=>{

  //       //    return preVal + opVal
  //       //   })

  //       // } else {
  //       //   console.log(inputVal)
  //       // }

  //       switch (currentOp) {
  //         case "+":
  //           setInputVal((preVal) => {
  //             return preVal + opVal;
  //           });
  //           break;

  //         case "-":
  //           setInputVal((preVal) => {
  //             return opVal - preVal;
  //           });
  //           break;

  //         case "*":
  //           setInputVal((preVal) => {
  //             return opVal * preVal;
  //           });
  //           break;

  //         case "/":
  //           setInputVal((preVal) => {
  //             return opVal / preVal;
  //           });
  //           break;

  //         default:

  //           break;
  //       }

  //     },
  //   },
  // ];

  return (
    <>
      <div className=" bg-slate-700 h-screen justify-center items-center text-center flex  ">
        <div className="  bg-slate-500   w-[350px] rounded-xl py-5 ">
          <h1 className=" text-5xl font-semibold p-4">Calculator</h1>
          <p className="text-right pr-10 ">
            {" "}
            {opVal} {currentOp}
          </p>
          <input
            type="text"
            className="h-14 w-[300px] rounded-lg opacity-80 text-2xl p-3 text-right my-5 "
            value={inputVal}
          ></input>
          <CalWrap BtnArr={BtnArr} /> {/* opArr={opArr}  */}
        </div>
      </div>
    </>
  );
};

export default Cal;
