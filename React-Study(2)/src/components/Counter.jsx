import React, { useState } from 'react'

export default function Counter() {
    //useState 함수 사용
    const [count, setCount] = useState(0); //state 초기값을 0으로 저장

    const updateCount = (arg) => {
        setCount(count + arg);
    }

    /* 일반 변수 사용 -> 값의 변경사항이 화면에 반영되지 않음
        let count = 0;
        const updateCount = (arg) => {
            count = count + arg;
        }
    */

    return (
        <div>
            <button onClick={() => updateCount(-1)}>-</button>
            <span>{count}</span>
            <button onClick={() => updateCount(1)}>+</button>
        </div>
    )
}
