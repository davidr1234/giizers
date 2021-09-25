import MiScreen from "./MiScreen.js";
import "animate.css";
import "./WinPrizeScreen.css";

export default function WinPrizeScreen(props) {
  return (
    <MiScreen logo="TOP-RIGHT" btnMainText="Start">
      <div>
        <div>
          <h1 className="animate__animated animate__rubberBand">
            Yes! Du hast gewonnen!
          </h1>
        </div>

        <table>
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Öko?</th>
              <th>Nett?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>000001</td>
              <td>Lani</td>
              <td>Ovendale</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MiScreen>
  );
}
