import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement('#app');
const OptionModal = (props) => (
  <div>
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCearSelectedOption}
    contentLabel="Selected Option">
    <h3>Selected Option</h3>
    {props.seletedOption && <p>{props.seletedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
  </div>
)

export default OptionModal;