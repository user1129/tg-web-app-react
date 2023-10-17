import { useEffect } from "react";
import "./App.css";

const Telegram = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    Telegram.ready();
  }, []);

  const onClose = () => {
    Telegram.close();
  };

  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
