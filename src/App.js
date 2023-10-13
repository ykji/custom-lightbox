import { useState } from "react";
import Modal from "./components/Modal";
import "./index.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="main">
      <button onClick={() => setShow(true)}>
        {show ? "Hide" : "Show"} Modal
      </button>
      <Modal show={show} title="Modal Title" onClose={() => setShow(false)}>
        <p>The content of modal will go here.</p>
      </Modal>
    </div>
  );
}

export default App;
