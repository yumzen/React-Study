import React, { useState } from 'react'
import "./App.css"
import Viewer from './components/Viewer'
import Controller from './components/Controller'

export default function App() {

  const [count, setCount] = useState(0);
  const handleCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleCount={handleCount} />
      </section>
    </div>
  );
}