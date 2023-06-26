import { Link } from 'react-router-dom';
import React from 'react';
import './Main.css';
import img1 from './abc.png';

function Main() {

    return (
        <div class="container">
            <img src={img1} alt="abcdef"></img>
            <p>바다사진</p>
            <Link to="/subpage">
                <button>버튼</button>
            </Link>
            <div id='root'></div>
            {/* link 컴포넌트 : HTML5 History API를 사용하여 브라우저의 주소만 바꿀 뿐, 페이지를 새로 불러오지는 않음. to를 통해 랜더링 */}
        </div >
    );
}

export default Main;