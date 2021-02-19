import "./App.css";
import Board from "./components/Board/Board";
import StartGameModal from "./components/Modal/StartGameModal";

import { useEffect, useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(true);

  return (
    <div className="App">
      <StartGameModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        backdrop="static"
        keyboard={false}
      />
      {!modalShow && <Board />}
    </div>
  );
}

export default App;
