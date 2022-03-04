import "./styles.css";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const toggle = () => {
    if (color === "black") {
      setColor("transparent");
      setText("black");
    } else {
      setColor("black");
      setText("white");
    }
  };
  return (
    <div style={{ backgroundColor: color }} className="App">
      <div>
        <button onClick={toggle}>🌙</button>
        <h1 style={{ color: text }}>Hello CodeSandbox</h1>
        <h2 style={{ color: text }}>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
