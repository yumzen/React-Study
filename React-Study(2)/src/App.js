import react, { useState } from 'react';
import List from './components/List';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import UseRef from './components/UseRef';

function App() {
  /*
  //number
  const [num, setNum] = useState(0);

  //string
  const [name, setName] = useState('');

  //boolean
  const [isChecked, setIsChecked] = useState(false);
  */

  return (
    <div>
      <UseRef />
      {/*
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <input
          type='checkbox'
          value={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        {isChecked ? <span> 체크됨 </span> : <span> 체크 안 됨</span>}
      </div>
      */
      }
    </div>
  );
}

export default App;
