import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class AuthModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    Modal.setAppElement('#root');

    this.afterOpenModal = this.afterOpenModal.bind(this);
  }


  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.toggleAuthModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.props.toggleAuthModal}>close</button>
          <div>{this.props.formType}</div>
        </Modal>
      </div>
    );
  }
}

export default AuthModal;
