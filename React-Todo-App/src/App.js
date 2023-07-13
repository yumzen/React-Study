import "./App.css"
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {useState,useRef} from "react";

//mock(목) 데이터란 모조품 데이터로, 기능을 완벽히 구현하지 않은 상태에서 테스트를 목적으로 사용하는 데이터
const mockTodo = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    createdDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래 널기",
    createdDate : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래 연습하기",
    createdDate : new Date().getTime(),
  },
]

function App() {
  /*
  useState를 이용해 할 일 아이템의 상태를 관리할 State를 만든다. 
  함수 useState에서 인수로 빈 배열을 전달해 State 변수 todo의 기본값을 빈 배열로 초기화한다.
  즉, State 변수 todo는 데이터를 저장하는 배열이면서 일종의 DB 역할을 수행
  */
  const[todo, setTodo] = useState(mockTodo);

  //초기값이 3인 Ref 객체를 생성해 idRef에 저장
  const idRef = useRef(3);

  //새 할 일 아이템을 추가하는 함수 onCreate
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current,
      content,
      isDone : false,
      createdDate : new Date().getTime(),
    };
    
    // 배열의 스프레드 연산자를 활용해 newItem을 포함한 새 배열을 만들어 State 변수 todo를 업데이트-> 새롭게 추가된 아이템은 항상 배열의 0번 요소가 됨
    setTodo([newItem, ...todo]);
    idRef.current +=1;
  }

  return (
    <div className = "App">
      <Header/>
      <TodoEditor onCreate = {onCreate}/>
      <TodoList/>
    </div>
  );
}

export default App;
