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
            Poke Match
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="text-justify w-100 px-5 my-2">
          {/* <p>Choose the card type</p>
          <button className="boardSize">Pokemon</button> */}
          <h5>Rules</h5>
          <p className="mb-0">
            1. The player needs to find and match similar pokemons with minimum
            no. of attempts and minimum time. <br></br>2. The no. of attempts
            will increase on revealing every second pokemon card. <br></br>3.
            The timer will stop once all the cards are matched.
          </p>
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
