import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = "55c62c295e95adbb3276e4f8b6b27c81";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    //async : 비동기방식으로, async 함수가 붙은 함수는 항상 프라미스를 반환
    if (e.key === 'Enter') {
      try {
        const data = await axios({
          // await : 프라미스가 처리될 때까지 기다림
          method: 'get', //정보수집
          url: url
        })
        setResult(data);
        console.log(data);

      }
      catch (err) {
        alert(err);
      }
    }
  }

  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
            </div>
            <div className="sky">{result.data.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

export default App;


const AppWrap = styled.div`
  width : 100vw;
  height : 100vh;
  border : 1px red solid;
  
  .appContentWrap{
    left: 50%;
    top : 50%;
    trasform : translate(-50%, -50%);
    position : absolute;
    border: 3px purple solid;
    padding : 20px;
    border-radius:10px;
  }

  input {
    padding: 13px;
    border: 2px black solid;
    border-radius: 10px;
  }

  `;

const ResultWrap = styled.div`
    margin-top: 40px;
    padding : 10px;
    border : 2px black solid;
    border-radius:8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
  `;