import MiScreen from "./MiScreen.js";
import "animate.css";
import Item from "./stuff/Item.js";

export default function ListScreen(props) {
  const items = props.appState.products;

  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText="Scannen"
      onButtonClick={() => props.appState.navigateTo("SCAN")}
    >
      <div style={{ height: 48, width: "100%" }}></div>
      {items.length == 0 && (
        <div style={{ marginBottom: 64 }}>Noch keine Einkäufe.</div>
      )}
      {items.map((item) => {
        return <Item item={item}></Item>;
      })}
      {items.length > 0 && (
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
            onClick={() => props.appState.navigateTo("CHECKOUT")}
          >
            ZUR KASSE
          </button>
        </div>
      )}
    </MiScreen>
  );
}
