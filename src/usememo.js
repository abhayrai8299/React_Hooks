import React, { useMemo, useState } from "react";

const UseMemo = () => {
    console.log("Inner Module usermemo");
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const memofunc=useMemo(function func(){
    console.log("func")
    return count*5;
  },[count])

  return <div>
    <h1>UseMemo</h1>
    <h4>Count:{count}</h4>
    <h4>Item:{item}</h4>
    <h4>{memofunc}</h4>
    <button onClick={()=>setCount(count+1)}>Handle Count</button>
    <button onClick={()=>setItem(item*5)}>Handle Item</button>
    </div>;
};

export default UseMemo;
