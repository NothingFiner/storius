import React from 'react';
import Modal from 'react-modal';
import AuthForm from './auth_form';

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

class AuthModal extends React.Component {
  constructor() {
    super();

    Modal.setAppElement('#root');
    this.loginGuest = this.loginGuest.bind(this);
  }

  submitHandler() {
    return this.props.formType === 'login' ? this.props.login : this.props.signup;
  }

  loginGuest() {
    const guest = { username: 'guest', password: 'elierules' };
    this.props.login(guest).then(this.props.toggleAuthModal());
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
          onClick={this.props.toggleAuthModal}
          className="fa fa-close modal-close"
        />
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.toggleAuthModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3 className="form-header">{ this.props.formType === 'login' ? 'LOG IN TO ' : 'SIGN UP FOR ' }STORIUS</h3>
          <button
            onClick={this.loginGuest}
            className="margin-top-1rem btn btn-square btn-auth"
          >
            <i className="fa fa-user-circle-o" />
            Guest Login
          </button>
          <AuthForm
            formType={this.props.formType}
            setAuthFormType={this.props.setAuthFormType}
            submitHandler={this.submitHandler()}
            toggleAuthModal={this.props.toggleAuthModal}
            errors={this.props.errors}
          />
        </Modal>
      </div>
    );
  }
}

AuthModal.propTypes = {
  formType: React.PropTypes.string.isRequired,
  errors: React.PropTypes.shape({
    username: React.PropTypes.array,
    email: React.PropTypes.array,
    password: React.PropTypes.array,
  }).isRequired,
  setAuthFormType: React.PropTypes.func.isRequired,
  toggleAuthModal: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  signup: React.PropTypes.func.isRequired,
  currentUser: React.PropTypes.shape({
    id: React.PropTypes.integer,
    username: React.PropTypes.string,
    email: React.PropTypes.string,
    bio: React.PropTypes.string,
  }),
};

AuthModal.defaultProps = {
  currentUser: null,
  errors: [],
};

export default AuthModal;
