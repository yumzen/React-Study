#### 💡 reference
> youtube-인브로즈

# jsx 규칙
1. class 대신 **className 사용하기**
    - class 사용시 warning 발생
2. **무조건 하나의 부모 요소로 감싸주기**
    - div로 묶어주기 싫을 때는 빈 태그로 감싸주기
    - 빈 태그는 Fragment라고 부르며, 실제로 화면에 렌더링 되지는 않는다.
    ```javascript
    <return>(
        <fragment>
            <button>버튼1</button>
            <button>버튼2</button>
        </fragment>
    )
    ```
  
3. Jsx 내에서 js 표현식을 사용하고 싶을 때는 **중괄호({}) 사용하기**

