import "./styles.css";
import { dimensions, imagesAndColors, text } from "./config.js";

const {
  chatBox: {
    height,
    width,
    border: { thickness, style, color }
  }
} = dimensions;

export default function ChatArea() {
  return (
    <div className="chat-area">
      <div
        className="text-box chat-box"
        style={{
          height: height - thickness * 2,
          width: width - thickness * 2,
          backgroundColor: imagesAndColors.sidebarColor,
          border: `${thickness}px ${style} ${color}`
        }}
      >
        {text.chatBoxTitle}
      </div>
    </div>
  );
}
