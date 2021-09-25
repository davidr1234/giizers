import logo from './logo.svg';
import './App.css';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import React from 'react';

function App() {

  const [data, setData] = React.useState("Not Found");

  const imageLoader = () => {
    return (
      <div>
        <img src="https://image.migros.ch/2017-large/6fa8aec688e81a86612d4208aa87da936f408991/focus-vitamin-water-active.jpg"/>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(imageLoader);
          else setData(<div style={{textAlign: 'center'}}>Bitte platzieren Sie den Strichcode vor die Kamera</div>);
        }}
      />

      <p>{data}</p>

      </body>
    </div>
  );
}

export default App;
