#### 💡 reference
> youtube-인브로즈

# 1. 상태(State)
 - 컴포넌트 내부의 **변화**하는 값
 - 특정 상황이나 시점에 따라 달라질 수 있는 값은 state를 만들어 처리

# 2. useState란?
 - 컴포넌트에서 **State(상태)**를 다룰 때 사용하는 함수
```javascript
    const [count, setCount] = useState(0); 
```
   - useState 함수 **인자에는 state의 초기값**
   - useState 함수는 **배열을 반환** (index 0 : state 값, index 1 : state를 업데이트할 때 사용하는 함수-setter)
      - **useState의 용법 : const [state 변수, set함수] = 생성자(초기값);**

 ### **useState 규칙 (naming convention관련)**
 - state 값은 반드시 setter 함수로만 변경 가능
 - setter 함수는 state 이름 앞에 "set"을 붙여서 작성하는 것이 일반적

### **왜 일반 변수로는 변화하는 값을 다룰 수 없나?**
-  일반 변수 사용 -> 값의 변경사항이 화면에 반영되지 않음
    ```javascript
    let count = 0;
    const updateCount = (arg) => {
        count = count + arg;
    }
    ```
- 즉, **State가 아닌 일반 변수는 렌더링을 일으킬 수 없음**
- **렌더링이 일어나야 변경사항이 반영된 가장 최신 버전의 화면이 DOM에 적용되어 바뀐 화면을 볼 수 있음**
- **렌더링을 발생시킬 수 있는 것은 State의 setter 함수 !! 즉, 값의 변화를 화면에 보이려면 State를 사용해야 함**
  

### **랜더링(Rendering)**
- 가장 최신 버전의 컴포넌트 상황을 가져오기 위해 컴포넌트를 실행하는 것
   - 컴포넌트는 함수임 -> 렌더링 발생 == 컴포넌트 실행 == **함수호출**

# 3. Component가 화면에 그려지는 과정
> 1. 렌더링 시키기
> 2. 컴포넌트 렌더링 수행하기
> 3. DOM에 변경사항 반영(commit)하기
> 4. 브라우저가 화면 다시 그리기


### **렌더링 발생 경우**
> - 최초 앱 실행시 또는 새로고침 (initial rendering)
>   - **root component와 모든 자식 component 실행**
> - state 값이 변경되었을 때 (re-rendering)
>   - **state 값을 가진 component와 모든 자식 component 실행**


```javascript
onChange={(e) => setNum(e.target.value)}
```
- `(e)`는 이벤트 객체를 나타냄
- `e.target`은 이벤트를 일으킨 요소 즉, 입력
- `e.target.value`은 입력 필드의 협재 값에 접근


# 4. useRef
> - useRef 는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다. - React 공식 홈페이지