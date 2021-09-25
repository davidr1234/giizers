import MiScreen from "./MiScreen.js";
import "animate.css";
import colafrosch from "../img/cola-froeschli.jpg";
import Item from "./stuff/Item.js";

export default function ListScreen(props) {
  const items = [
    { title: "Eier", image: colafrosch, co2: 3, wohl: 4 },
    { title: "Cola", image: colafrosch, co2: 2, wohl: 5 },
    { title: "Wasser", image: colafrosch, co2: 5, wohl: 4 },
  ];

  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText="Scannen"
      onButtonClick={() => props.navigateTo("SCAN")}
    >
      <div style={{ height: 48, width: "100%" }}></div>
      {items.map((item) => {
        return <Item item={item}></Item>;
      })}
      <div className="">
        <button
          style={{
            backgroundColor: "inherit",
            border: "3px solid white",
            color: "white",
            font: "inherit",
            padding: "12px 24px",
            borderRadius: 3,
            width: "100%",
            textTransform: "uppercase",
          }}
          onClick={() => props.navigateTo("CHECKOUT")}
        >
          ZUR KASSE
        </button>
      </div>
    </MiScreen>
  );
}
