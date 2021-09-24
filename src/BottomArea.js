import "./styles.css";
import { text, imagesAndColors, dimensions } from "./config.js";

const {
  bottomText: {
    width,
    height,
    border: { thickness, style, color }
  }
} = dimensions;

export default function BottomArea() {
  return (
    <div className="bottom-area">
      <div
        className="text-box bottom-box"
        style={{
          height: height - thickness * 2,
          width: width - thickness * 2,
          backgroundColor: imagesAndColors.bottomColor,
          border: `${thickness}px ${style} ${color}`
        }}
      >
        <h3 className="name">{text.name}</h3>
        <div className="plug-area">
          <h4>{text.tagline}</h4>
          <h4>{text.plug}</h4>
        </div>
      </div>
    </div>
  );
}
