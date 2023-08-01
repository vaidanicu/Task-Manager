import { useEffect, useState } from "react";
import "./Modal.css";
import CloseIcon from "../../assets/close.png";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <div className="modal-content">
        <div className="card-xl">
          <div onClick={closeModal} className="close-button">
            <img src={CloseIcon} alt="close"></img>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
