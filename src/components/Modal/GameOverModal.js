import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GameOverModal.scss";

function GameOverModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="text-center w-100 pl-4">
          <Modal.Title id="contained-modal-title-vcenter">
            Game Over
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="mx-auto text-center modalBody">
          <p>
            Attempts : <span className="text-right">{props.tries}</span>
          </p>
          <p className="mb-0">
            Time Taken : <span className="text-right">{props.time}</span>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-center w-100">
          <Button className="startGameButton" onClick={props.onHide}>
            Play Again
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default GameOverModal;
