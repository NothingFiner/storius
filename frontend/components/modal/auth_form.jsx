import React from 'react';
import Errors from '../errors/errors';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  submitHandler() {
    return this.props.formType === 'login' ? this.props.login : this.props.signup;
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
    if (this.isSignup()) {
      user.email = this.state.email;
    }
    this.submitHandler()(user).then(() => {
      this.props.toggleModal();
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }


  loginGuest() {
    const guest = { username: 'guest', password: 'elierules' };
    this.props.login(guest).then(this.props.toggleModal());
  }

  otherAuth() {
    return this.props.formType === 'login' ? 'signup' : 'login';
  }

  isSignup() {
    return this.props.formType === 'signup';
  }

  switchForm(e) {
    e.preventDefault();
    this.props.setAuthFormType(this.otherAuth());
  }

  signupField() {
    if (this.props.formType === 'signup') {
      return (
        <div className="form-group">
          <Errors errorsArray={this.props.errors.email} />
          <input
            placeholder="Email"
            className="width-full margin-bottom-1rem"
            onChange={this.update('email')}
            type="email"
            id="email"
            value={this.state.email}
          />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <h3 className="form-header">{ this.props.formType === 'login' ? 'LOG IN TO ' : 'SIGN UP FOR ' }STORIUS</h3>
        <button
          onClick={this.loginGuest}
          className="margin-top-1rem btn btn-square btn-auth"
        >
          <i className="fa fa-user-circle-o" />
          Guest Login
        </button>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Errors errorsArray={this.props.errors.username} />
            <input
              placeholder="Username"
              className="width-full margin-top-1rem  margin-bottom-1rem"
              onChange={this.update('username')}
              type="text"
              id="username"
              value={this.state.username}
            />
          </div>
          { this.signupField() }
          <div className="form-group">
            <Errors errorsArray={this.props.errors.password} />
            <input
              placeholder="Password"
              className="width-full margin-bottom-1rem"
              onChange={this.update('password')}
              type="password"
              id="password"
              value={this.state.password}
            />
          </div>
          <button className="btn btn-square">
            {this.props.formType === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <button
          className="margin-top-1rem text-lbl-btn"
          onClick={this.switchForm}
        >
          {this.otherAuth() === 'login' ? 'ALREADY HAVE AN ACCOUNT? SIGN IN HERE' : 'CREATE AN ACCOUNT'}
        </button>
      </div>
    );
  }
}

AuthForm.propTypes = {
  formType: React.PropTypes.string.isRequired,
  setAuthFormType: React.PropTypes.func.isRequired,
  toggleModal: React.PropTypes.func.isRequired,
  errors: React.PropTypes.shape({
    username: React.PropTypes.array,
    email: React.PropTypes.array,
    password: React.PropTypes.array,
  }).isRequired,
  login: React.PropTypes.func.isRequired,
  signup: React.PropTypes.func.isRequired,
};

export default AuthForm;
