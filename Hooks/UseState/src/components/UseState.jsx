import { useState } from "react";

const UseState = () => {
   const [count,setCount]= useState(0);  // let count=0;

    const plus=() => {
        // setCount(count+1); // count++; for only one data
        setCount((prevCount)=> prevCount+1);
        // setCount((prevCount)=> prevCount+1);
        // setCount((prevCount)=> prevCount+1); // with old data manipulation
        console.log(count);  
    };

    const sub=() => {
        setCount(count-1); // count--;
        console.log(count);
    };

  return (
       <div>
        <div className="w-[220px] h-[220px] mt-[15%] ml-[40%] flex bg-green-500 rounded-full">
            <button onClick={sub} className="bg-blue-500 rounded-lg w-[72px] h-[72px] text-white text-[30px] font-extrabold">-</button>
            <h4 className="w-[72px] h-[72px] text-black text-[30px] font-extrabold ml-[40px] mt-[10px]">{count}</h4>
            <button onClick={plus} className="bg-blue-500 rounded-lg w-[72px] h-[72px] text-white text-[30px] font-extrabold">+</button>
        </div>
       </div>
  );
};

export default UseState