import "./styles.css";
import { imagesAndColors } from "./config.js";
import ContentArea from "./ContentArea";
import CharacterArea from "./CharacterArea";
import BottomArea from "./BottomArea";
import ChatArea from "./ChatArea";

export default function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${imagesAndColors.backgroundImage})` }}
    >
      <div className="left-area">
        <ContentArea />
        <BottomArea />
      </div>
      <div className="right-area">
        <ChatArea />
        <CharacterArea />
      </div>
    </div>
  );
}
