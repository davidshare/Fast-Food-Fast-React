import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/modal.css';

const Modal = props => (
  <div id="simpleModal" className="modal">
    <div className="modal-content">
      <span
        className="close-btn"
        id="closeBtn" onClick={props.modalClose}
        >&times;</span>
      {props.children}
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.any,
  modalClose: PropTypes.func,
};

export default Modal;
