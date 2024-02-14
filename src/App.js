
import './App.css';
import UseMemoHook from './UseMemoHook';

import { useState, useMemo , useCallback} from 'react';
import ChildA from './ChildA';
function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  let learning = useCallback(() => {
  
  },[count])
  ;
  return (
    <>
    <h1>Learning useCallBack Hook</h1>
    <ChildA  learning ={learning}/>
    <p>{add}</p>
    <button onClick={()=> setAdd(add +1)}>Addition</button>
    <p>{count}</p>
    <button onClick={()=> setCount(count +2)}>Count</button>
    </>
  );
}

export default App;
