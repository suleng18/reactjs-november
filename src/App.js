import React from 'react';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import AlbumFeature from './features/Album';
// import './App.css';
import TodoFeature from './features/Todo';

function App() {
  // const name = 'Long';
  // const age = 18;
  // const isMale = true;
  // const student = {
  //   name: 'Suleng',
  // };
  // const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Su Leng</p>

        <p>
          Xin chao {name}: {age} - {isMale ? 'Male' : 'Female'}
        </p>

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Famale</p>}

        {isMale && (
          <div>
            <p>Male1</p>
            <p>Male2</p>
            <p>Male3</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male3</p>
            <p>Male4</p>
            <p>Male5</p>
          </React.Fragment>
        )}

        {isMale && (
          <>
            <p>Male6</p>
            <p>Male7</p>
            <p>Male8</p>
          </>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
      </header> */}
      {/* <AlbumFeature /> */}
      {/* <ColorBox /> */}
      {/* <Counter /> */}
      <TodoFeature />
    </div>
  );
}

export default App;
// ôn lại bài 16
