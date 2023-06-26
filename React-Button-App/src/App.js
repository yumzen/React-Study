import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*
BrowserRouter 컴포넌트 : HTML5를 지원하는 브라우저의 주소를 감지
Routes 컴포넌트 : 여러 Route를 감싸서 그 중 규칙이 일치하는 route 하나만을 랜더링 시켜줌 
Route 컴포넌트 : path(경로), element(컴포넌트)
*/
import Main from './Main';
import Subpage from './Subpage';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Routes> : 여러 Route 감싸서 그 중 규칙이 일치하는 route 하나만을 렌더링*/}
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Subpage" element={<Subpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;