import logo from './logo.svg';
import './App.css';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import React from 'react';
import rivella from './7610097111072';

function App() {

  const [data, setData] = React.useState("Not Found");

  const imageLoader = () => {
    var imagePath = rivella.image.original;
    console.log(imagePath);

    return (
      <img src={imagePath}/>
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
