
import { useState } from 'react';
import './App.css';
import Usememos from './usememo';
import Memo1 from './memo1';
import Lazyloading from './lazyloading';
function App() {
  const [count,setCount]=useState(0);
  const [data,setData]=useState(10);
  return (
    <div className="App">
      {/* <Usememos />
      <h1>Memo with React{count}</h1>
      <Memo1 data={data} />
      <button onClick={()=>setCount(count+1)}>Click</button> */}
     <Lazyloading />
    </div>
  );
}

export default App;
