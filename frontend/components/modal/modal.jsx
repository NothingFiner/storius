import React from 'react';
import Modal from 'react-modal';
import AuthFormContainer from './auth_form_container';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    zIndex: 15,
  },
  content: {
    top: '1rem',
    left: 'calc(50vw - 225px)',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: '#e9e9e9',
    width: '450px',
    borderRadius: '0',
    animation: 'expand_in .15s cubic-bezier(.25,.46,.45,.94)',
  },
};

class FormModal extends React.Component {
  constructor() {
    super();

    Modal.setAppElement('#root');
  }

  render() {
    if (this.props.currentUser !== null) {
      return null;
    }
    const buttonStyle = {
      display: this.props.modalIsOpen ? 'block' : 'none',
    };
    return (
      <div>
        <button
          style={buttonStyle}
          onClick={this.props.toggleModal}
          className="fa fa-close modal-close"
        />
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.toggleModal}
          style={customStyles}
          contentLabel="Storiu Modal"
        >
          <AuthFormContainer />
        </Modal>
      </div>
    );
  }
}

FormModal.propTypes = {
  toggleModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
  currentUser: React.PropTypes.shape({
    id: React.PropTypes.integer,
    username: React.PropTypes.string,
    email: React.PropTypes.string,
    bio: React.PropTypes.string,
  }),
};

FormModal.defaultProps = {
  currentUser: null,
  errors: [],
};

export default FormModal;
