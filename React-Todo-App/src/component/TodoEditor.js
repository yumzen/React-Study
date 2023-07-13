import { useState, useRef } from "react";
import "./TodoEditor.css";

//Props 객체를 구조 분해 할당
const TodoEditor = ({onCreate}) => {
    const [content,setContent] = useState("");
    //입력 폼의 onChange 이벤트 핸들러 onChangeContent 생성
    const OnchangeContent = (e) => {
        setContent(e.target.value);
    }

    const inputRef = useRef();

    //추가 버튼에 대한 이벤트 핸들러 onSubmit 생성
    //onSubmit은 함수 onCreate를 호출하고ㅓ 인수로 content의 값을 전달
    const onSubmit = () => {
        if (!content){
            /* 빈 입력 방지를 위해 할 일 입력 폼을 제어할 객체 inputRef 생성
            빈 문자열이면 inputRef가 current(현재값)로 저장한 요소에 포커스하고 종료
            입력 폼에 커서가 위치하게 되고 사용자에게 빈 입력을 방지하기 위해 다시 입력하도록 유도하는 역할을 함
            */
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

     //함수 onKeyDown은 사용자가 enter 키를 눌렀을 때 호출할 이벤트 핸들러
    const onKeyDown = (e) => {
        //e.keyCode에는 현재 사용자가 누른 키보드의 키가 숫자로 변환되어 저장되는데, 13은 enter키를 의미한다.
        //즉, e.keyCode가 13이면 함수 onSubmit 호출
        if(e.onKeyDown === 13){
            onSubmit();
        }
    }

    return (
        <div className = "TodoEditor">
            <h4>새로운 Todo 작성하기✏️</h4>
            <div className = "editor_wrapper">
                <input 
                    ref = {inputRef}
                    value = {content}
                    onChange={OnchangeContent}
                    onKeyDown={onkeydown}
                    placeholder="새로운 Todo.."
                />
                <button onClick={onSubmit}> 추가 </button>
            </div>
        </div>
    )
}

export default TodoEditor;

/*
기능 흐름
1. 사용자가 새로운 할 일 입력
2. TodoEditor 컴포넌트에 있는 추가 버튼 클릭
3. TodoEditor 컴포넌트는 부모인 App에게 아이템 추가 이벤트가 발생했음을 알리고 사용자가 추가한 할 일 데이터 전달
4. App 컴포넌트는 TodoEditor 컴포넌트에서 받은 데이터를 이용해 새 아이템이 추가된 배열을 만들고 State 변수 todo값 업데이트
5. TodoEditor 컴포넌트는 자연스러운 사용자 경험을 위해 할 일 입력 폼을 초기화
*/