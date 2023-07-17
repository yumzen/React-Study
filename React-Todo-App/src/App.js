import "./App.css"
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestComp from "./component/TestComp";
import {useReducer,useRef, useCallback} from "react";

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

function reducer(state, action){
  switch(action.type){
    case "CREATE" :{
      return [action.newItem, ...state]
    }
    
    // map 메서드로 순회하면서 매개변수 state에 저장된 아이템 배열에서 action.targetID와 id를 비교해 일치하는 아이템의 isDone을 토글한 새 배열 반환
    case "UPDATE" : {
      return state.map((it) => 
        it.id === action.targetID
          ?{
              ...it,
              isDone : !it.isDone,
          }
          : it
      );
    }

    /*action.type이 DELETE일때 filter 메서드로 id와 targetID가 일치하는 할 일 아이템만 제외한 할 일 배열을 생성해 반환
    !== 연산자를 사용하여 두 값이 일치하지 않는 경우만 true를 반환
    filter 메서드는 true를 반환하는 아이템들로 새로운 배열을 생성
    */
    case "DELETE" : {
      return state.filter((it) => it.id !== action.targetID)
    }

    defult :
      return state;
  }
}

function App() {
  /*
  useState를 이용해 할 일 아이템의 상태를 관리할 State를 만든다. 
  함수 useState에서 인수로 빈 배열을 전달해 State 변수 todo의 기본값을 빈 배열로 초기화한다.
  즉, State 변수 todo는 데이터를 저장하는 배열이면서 일종의 DB 역할을 수행
  */
  const[todo, dispatch] = useReducer(reducer,mockTodo);

  //초기값이 3인 Ref 객체를 생성해 idRef에 저장
  const idRef = useRef(3);

  //새 할 일 아이템을 추가하는 함수 onCreate
  //Ref 객체를 이용해 아이템마다 고유 id를 가지게 됨
  const onCreate = (content) => {
    /*
    const newItem = {
      id : idRef.current,
      content,
      isDone : false,
      createdDate : new Date().getTime(),
    };
    배열의 스프레드 연산자를 활용해 newItem을 포함한 새 배열을 만들어 State 변수 todo를 업데이트-> 새롭게 추가된 아이템은 항상 배열의 0번 요소가 됨
    setTodo([newItem, ...todo]);
    */
    dispatch({
      type : "CREATE",
      newItem: {
        id : idRef.current,
        content,
        isDone : false,
        createdDate : new Date().getTime(),
      },
    });
    idRef.current +=1;
  }

  const onUpdate = useCallback((targetID) => {
    /*
    setTodo (
      todo.map(
        (it) => {
          if(it.id === targetID){
            return {
              ...it,
              isDone : !it.isDone,
            };
          }else {
            return it;
          }
        }
      )
    );
    */
    dispatch ({
      //action 객체의 type 프로퍼티에는 수정을 의미하는 UPDATE를, targetID 프로퍼티에는 체크 여부로 수정할 아이템의 id를 설정
      type :"UPDATE",
      targetID,
    });
  }, []);

  const onDelete = useCallback((targetID) => {
    // setTodo(todo.filter((it) => it.id !== targetID ));
    dispatch({
      type : "DELETE",
      targetID,
    });
  }, []);

  return (
    <div className = "App">
      <Header/>
      <TodoEditor onCreate = {onCreate}/>
      <TodoList todo = {todo} onUpdate = {onUpdate} onDelete = {onDelete}/>
    </div>
  );
}

export default App;
