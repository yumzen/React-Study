import {useReducer} from "react";

//상태 변화가 reducer 함수 안에서 일어남
function reducer (state, action) {
    switch(action.type){
        case "INIT" :
            return 0;
        case "INCREASE" :
            return state + action.data;
        case "DECREASE" :
            return state - action.data;
        default :
            return state;
    }
}

function TestComp(){
    /*
    const [count, setCount] = useState(0);

    // 상태 변화 코드 OnIncrease (State값 변경하는 코드) : count 1 증가
    const onIncrease = () => {
        setCount(count + 1);
    }

    // 상태 변화 코드 OnDecrease (State값 변경하는 코드) : count 1 감소
    const onDecrease = () => {
        setCount(count -1);
    }
    */

    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={() => dispatch({type:"INCREASE", data:1})} >+</button>
                <button onClick={() => dispatch({type:"DECREASE", data:1})} >-</button>
                <button onClick={() => dispatch({type:"INIT", data:1})} >초기화</button>
            </div>
        </div>
    )
};

export default TestComp;