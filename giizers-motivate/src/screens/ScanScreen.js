import MiScreen from "./MiScreen.js";
import React from "react";
import "animate.css";
import colafrosch from "../img/cola-froeschli.jpg";
import Item from "./stuff/Item.js";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function ScanScreen(props) {
  const [data, setData] = React.useState({});

  const imageLoader = (gtin) => {
    let productPath = "data/"+gtin+".json"

    fetch(productPath ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
      return response.json();
    }).then(function(myJson) {
      setData(myJson);
     });

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
            if (result) imageLoader(result.text)
            else
              setData({});
          }}
        />
      </div>

      <Item item={{ title: data.name, image: data.image?.original, co2: data.m_check2?.carbon_footprint?.ground_and_sea_cargo?.rating, wohl: 4 }}></Item>
    </MiScreen>
  );
}
