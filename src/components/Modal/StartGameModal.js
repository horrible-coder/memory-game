import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StartGameModal.scss";

function StartGameModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="text-center w-100">
          <Modal.Title id="contained-modal-title-vcenter">
            Memory Game
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center w-100">
          <p>Choose the card type</p>
          <button className="boardSize">Pokemon</button>
          <button className="boardSize">Place</button>
          <button className="boardSize">Food</button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-center w-100">
          <Button className="startGameButton" onClick={props.onHide}>
            Start Game
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default StartGameModal;
