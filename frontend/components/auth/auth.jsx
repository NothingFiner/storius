import React from 'react';
import Modal from 'react-modal';
import AuthForm from './auth_form';

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

    Modal.setAppElement('#root');
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }


  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  submitHandler() {
    return this.props.formType === 'login' ? this.props.login : this.props.signup;
  }

  render() {
    if (this.props.currentUser !== null) {
      return null;
    }
    const errors = this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>);
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.toggleAuthModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.props.toggleAuthModal}>close</button>
          <h3>{ this.props.formType }</h3>
          <ul>
            { errors }
          </ul>
          <AuthForm
            formType={this.props.formType}
            setAuthFormType={this.props.setAuthFormType}
            submitHandler={this.submitHandler()}
          />
        </Modal>
      </div>
    );
  }
}

AuthModal.propTypes = {
  formType: React.PropTypes.string.isRequired,
  errors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  setAuthFormType: React.PropTypes.func.isRequired,
  toggleAuthModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  signup: React.PropTypes.func.isRequired,
};

export default AuthModal;
