import React from 'react';

export default function Product({ url, alt, name, price }) {
    //객체 구조 분해 할당(비구조화 할당)을 이용하여 props 반복 피할 수 있음
    // -> logic이 길어진다면 구조 분해 할당을 사용하는 것이 더 유리
    return (
        <div style={{
            textAlign: "center",
            flexDirection: "column",
            float: "left",
            margin: "30px"
        }}>
            <img src={url} alt={alt} style={{ height: "320px", width: "249px", display: "inline-block" }} />
            <div style={{ fontSize: "15px" }}> {name} </div>
            <div style={{ fontSize: "13px" }}> {price} </div>
        </div >

    )
}

export function Test() {
    return (
        <div>test</div>
    )
}