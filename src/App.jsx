import { useState } from "react";
import QRCode from "react-qr-code";
import "./assets/style.css";

function App() {
  const [value, setValue] = useState("");
  const [qr, setQR] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQR(value);
    setValue("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Generate</button>
        <QRCode value={qr} />
      </form>
    </div>
  );
}

export default App;
