import React from 'react';
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <div>
      <ProductPage />
    </div>
  )
  /*
  const Button = React.createElement('button', { className: 'child-btn' }, '버튼')
  const wrapper = React.createElement('div', { className: 'wrapper' }, Button);
  return wrapper;
  */
  /*
  return (
    <div className="wrapper">
      <button className="child-btn">버튼</button>
    </div>
  )
  */
}

export default App;