import React from 'react';
import ReactDOM from 'react-dom/client';
// ReactDOM : 컴포넌트들을 html과 연결해줌
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM클래스의 render함수를 이용해서 documet(페이지)에 있는 id가 root라는 요소를 가져와서 연결
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
