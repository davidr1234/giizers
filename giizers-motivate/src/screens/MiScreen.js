import "./MiScreen.css";
import logo from "../img/migrosmotivate.png";

export default function MiScreen(props) {
  return (
    <div className="mi-screen">
      {props.logo == "TOP-RIGHT" && (
        <div className="top-right-logo">
          <img src={logo}></img>
        </div>
      )}
      {props.logo == "MAIN" && (
        <div style={{textAlign: 'center', marginTop: 72}}>
          <img style={{width: '80%'}} src={logo}></img>
        </div>
      )}
      {props.children}
      <div className="mi-main-button-wrap">
        <button className="mi-main-button" onClick={props.onButtonClick}>{props.btnMainText}</button>
      </div>
    </div>
  );
}
