import MiScreen from "./MiScreen.js";
import React from "react";
import "animate.css";
import Item from "./stuff/Item.js";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function ScanScreen(props) {
  const [data, setData] = React.useState({});

  const imageLoader = (gtin) => {
    let productPath = "data/" + gtin + ".json";

    fetch(productPath, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  const onAddClick = () => {
    if (data.name) {
      let p = props.appState.products;
      p.push({
        title: data.name,
        image: data.image?.original,
        co2: data.m_check2?.carbon_footprint?.ground_and_sea_cargo?.rating,
        wohl: data.m_check2?.animal_welfare?.rating,
      });
      props.appState.setProducts(p);
      props.appState.navigateTo("SCAN-END");
    }
  };

  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText={data.name ? "Hinzufügen" : "Scanne ..."}
      onButtonClick={onAddClick}
    >
      <div
        style={{
          width: "100%",
          height: "39.6%",
          backgroundColor: "white",
          marginTop: 64,
          marginBottom: 48,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <BarcodeScannerComponent
          width={"100%"}
          height={"100%"}
          onUpdate={(err, result) => {
            if (result) imageLoader(result.text);
          }}
        />
      </div>

      <Item
        item={{
          title: data.name,
          image: data.image?.original,
          co2: data.m_check2?.carbon_footprint?.ground_and_sea_cargo?.rating,
          wohl: data.m_check2?.animal_welfare?.rating,
        }}
      ></Item>
    </MiScreen>
  );
}
