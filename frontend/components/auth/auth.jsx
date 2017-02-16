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
  },
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#e9e9e9',
    width: '450px',
    borderRadius: '0',
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
          <h3 className="form-header">{ this.props.formType === 'login' ? 'LOG IN TO ' : 'SIGN UP FOR ' }STORIUS</h3>
          <ul>
            { errors }
          </ul>
          <AuthForm
            formType={this.props.formType}
            setAuthFormType={this.props.setAuthFormType}
            submitHandler={this.submitHandler()}
            toggleAuthModal={this.props.toggleAuthModal}
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
  currentUser: React.PropTypes.shape({
    id: React.PropTypes.integer,
    username: React.PropTypes.string,
    email: React.PropTypes.string,
    bio: React.PropTypes.string,
  }),
};

AuthModal.defaultProps = {
  currentUser: null,
};

export default AuthModal;
