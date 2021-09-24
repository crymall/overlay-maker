// TODO:
// - Text
//   - Custom fonts
//   - Positioning in bottom area
// - Breakpoint customization
// - Advanced styles
//   - Border-radius for boxes
//   - Background image for boxes
//   - Box-shadow for boxes
// - Comment this config with instructions for users!

// IDEAS:
// - MySpace-style HTML/CSS injection inside bottom/side areas?
// - Rethink section backgrounds
//   - Sidebar background different from bottom?
//   - Bottom different from content area?

// LONG-TERM TODO:
// - Routing for different states
//   - Away
//   - 'Just Chatting'
// - GUI for config

module.exports = {
  imagesAndColors: {
    backgroundImage: "https://wallpapercave.com/wp/hN0TnNU.jpg",
    canvasColor: "black",
    sidebarColor: "#383838",
    bottomColor: "#333866"
  },
  text: {
    name: "crymall",
    tagline: "This is a test stream, what are you even doing here?",
    plug: "Twitter: @reedgaines",
    chatBoxTitle: "Chat"
  },
  dimensions: {
    canvas: {
      height: 800,
      width: 1450,
      border: {
        thickness: 7,
        style: "solid",
        color: "#8a888b"
      }
    },
    chatBox: {
      height: 500,
      width: 300,
      border: {
        thickness: 7,
        style: "solid",
        color: "#8a888b"
      }
    },
    bottomText: {
      width: 1450,
      height: 160,
      border: {
        thickness: 7,
        style: "solid",
        color: "#8a888b"
      }
    }
  }
};
