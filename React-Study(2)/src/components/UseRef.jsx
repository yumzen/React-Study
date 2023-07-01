import React, { useRef, useState } from 'react'

export default function UseRef() {
    // 텍스트 입력 폼에서 사용자가 문자를 다섯 글자 미만으로 입력하면 이 요소에 포커스한 상태로 사용자가 입력을 추가할 때까지 대기
    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClink = () => {
        if (text.length < 5) {
            textRef.current.focus(); //현재 돔 요소에 포커스를 지정하는 메소드 focus()사용
        } else {
            alert(text);
            setText('');
        }
    };

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClink}>작성완료</button>
        </div>
    );
}
