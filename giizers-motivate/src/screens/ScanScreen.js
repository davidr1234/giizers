import MiScreen from "./MiScreen.js";
import "animate.css";
import colafrosch from "../img/cola-froeschli.jpg";
import Item from "./stuff/Item.js";

export default function ScanScreen(props) {
  return (
    <MiScreen
      logo="TOP-RIGHT"
      btnMainText="Hinzufügen"
      onButtonClick={() => props.navigateTo("SCAN-END")}
    >
      <div
        style={{
          width: "100%",
          height: 420,
          backgroundColor: "white",
          marginTop: 64,
          marginBottom: 48,
          borderRadius: 3,
        }}
      ></div>

      <Item item={{ title: "Eier", image: colafrosch, co2: 3, wohl: 4 }}></Item>
    </MiScreen>
  );
}
