import "./styles.css";
import { imagesAndColors, dimensions } from "./config.js";

const {
  canvas: {
    height,
    width,
    border: { thickness, style, color }
  }
} = dimensions;

export default function ContentArea() {
  return (
    <div className="content-area">
      <div
        class="canvas"
        style={{
          backgroundColor: imagesAndColors.canvasColor,
          width: width - thickness * 2,
          height: height - thickness * 2,
          border: `${thickness}px ${style} ${color}`
        }}
      />
    </div>
  );
}
