import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement('#app');
const OptionModal = (props) => (
  <div>
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal">
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
  </div>
)

export default OptionModal;