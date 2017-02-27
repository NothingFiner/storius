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
    this.switchForm = this.switchForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password };
    if (this.isSignup()) {
      user.email = this.state.email;
    }
    this.props.submitHandler(user).then(() => {
      this.props.toggleAuthModal();
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
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
  submitHandler: React.PropTypes.func.isRequired,
  toggleAuthModal: React.PropTypes.func.isRequired,
  errors: React.PropTypes.shape({
    username: React.PropTypes.array,
    email: React.PropTypes.array,
    password: React.PropTypes.array,
  }).isRequired,
};

export default AuthForm;
