import starfull from "../../img/starfull.png";
import starempty from "../../img/starempty.png";

function Star(props) {
  return (
    <div
      style={{ display: "inline-block", width: 12, height: 12, marginLeft: 2 }}
    >
      {props.full && <img style={{ width: "100%" }} src={starfull}></img>}
      {!props.full && <img style={{ width: "100%" }} src={starempty}></img>}
    </div>
  );
}

export default function Item(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 24 }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          backgroundColor: "white",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          style={{
            width: "100%",
            position: "absolute",
            left: "50%",
            top: "50%",
            height: "100%",
            width: "auto",
            transform: "translate(-50%,-50%)",
          }}
          src={props.item.image}
        ></img>
      </div>
      <div style={{ flex: 1, textAlign: "left", marginLeft: 24 }}>
        <div style={{marginBottom: 12}}>{props.item.title}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          Klima{" "}
          {(props.item.co2) ? 
            <div>
              {[0, 1, 2, 3, 4].map((it) => (
                <Star full={props.item.co2 > it}></Star>
              ))}
            </div>
        : <div>
              -
            </div>
          }
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          Tierwohl{" "}
          {(props.item.wohl) ? 
            <div>
              {[0, 1, 2, 3, 4].map((it) => (
                <Star full={props.item.wohl > it}></Star>
              ))}
            </div>
          : <div>
              -
            </div>
          }
        </div>
      </div>
    </div>
  );
}
