import MiScreen from "./MiScreen.js";
import React from "react";
import "animate.css";
import colafrosch from "../img/cola-froeschli.jpg";
import Item from "./stuff/Item.js";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import rivella from "../7610097111072";

export default function ScanScreen(props) {
  const [data, setData] = React.useState("Not Found");

  const imageLoader = () => {
    var imagePath = rivella.image.original;
    console.log(imagePath);

    return <img src={imagePath} />;
  };

  const onAddClick = () => {
    let p = props.appState.products;
    console.log(p);
    p.push({ title: "Eier", image: colafrosch, co2: 3, wohl: 4 });
    props.appState.setProducts(p);
    props.appState.navigateTo("SCAN-END");
  };

  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText="Hinzufügen"
      onButtonClick={onAddClick}
    >
      <div
        style={{
          width: "100%",
          height: 420,
          backgroundColor: "white",
          marginTop: 64,
          marginBottom: 48,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <BarcodeScannerComponent
          width={500}
          height={500}
          onUpdate={(err, result) => {
            if (result) setData(imageLoader);
            else
              setData(
                <div style={{ textAlign: "center" }}>
                  Bitte platzieren Sie den Strichcode vor die Kamera
                </div>
              );
          }}
        />

        <p>{data}</p>
      </div>

      <Item item={{ title: "Eier", image: colafrosch, co2: 3, wohl: 4 }}></Item>
    </MiScreen>
  );
}
