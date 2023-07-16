import TodoEditor from "./TodoEditor";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState, useMemo } from "react";

//map을 이용해 HTML 요소를 반복해 렌더링
//즉, map 메서드를 이용해 배열 todo의 모든 요소를 순차적으로 순회하며 HTML로 변환
//이 식의 결과 값은 배열 todo에 저장된 모든 할 일을 <div>태그로 감싼 것과 동일
const TodoList = ({todo, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearchResult = () => {
        // 현재 입력한 검색어인 search가 빈 문자열이면 todo를 그대로 반환하고, 그렇지 않으면 todo 배열에서 search 내용과 일치하는 아이템만 필터링해 반환
        return search === ""
        ? todo
        : todo.filter((it) => 
            it.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    /* 
    1. useMemo 사용하지 않으면 todo에 저장한 아이템 개수에 비례해 수행할 연산량 증가
    2. useMemo를 호출하고 첫 번째 인수로 함수 analyzeTodo를 전달하고 두 번째 인수로 todo가 담긴 배열을 전달한다. 
    3. 이 useMemo는 todo 값이 변할 때에만 첫 번째 인수로 전달한 콜백 함수를 호출하고 결과값을 반환한다.
    4. useMemo는 함수가 아닌 값을 반환하므로 함수 analyzeTodo에는 값이 저장된다. 따라서 구조분해 할당의 대상을 기존의 analyzeTodo()가 아닌 analyzeTodo로 변경해야 한다.
    */
    const analyzeTodo = useMemo(() => {
        const totalCount = todo.length;
        const doneCount = todo.filter((it) => it.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todo]);

    const {totalCount, doneCount, notDoneCount} = analyzeTodo;

    return( 
    <div className = "TodoList">
        <h4>Todo List🍀</h4>
        <div>
            <div>총개수 : {totalCount}</div>
            <div>완료된 할 일 : {doneCount}</div>
            <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
        </div>
        <input 
            value = {search}
            onChange={onChangeSearch}
            className="searchbar" 
            placeholder="검색어를 입력하세요"
        />
        <div className="list_wrapper">
            {getSearchResult().map((it) => (
                <TodoItem key = {it.id} {...it} onUpdate = {onUpdate} onDelete = {onDelete}/>
            /*<div>{it.content}</div>를 map 메서드의 콜백 함수가 HTML이 아닌 컴포넌트를 반환하도록 수정
            즉, map 메서드의 콜백 함수가 TodoItem 컴포넌트를 반환함. 
            이때 TodoItem 컴포넌트에 현재 순회 중인 배열 요소 it의 모든 프로퍼티를 스프레드 연산자를 이용해 Props로 전달
            배열 Todo에는 할 일 아이템 객체가 저장되어 있기 때문에 결과적으로 TodoItem 컴포넌트에는 이객체 각각의 프로퍼티가 Props로 전달됨
            key를 설정하면서 어떤 컴포넌트를 업데이트할지 결정
            */
            ))}
        </div>
    </div>
    );
};

export default TodoList;