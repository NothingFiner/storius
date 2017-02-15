import React from 'react';

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
    this.props.submitHandler(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
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
          <label htmlFor="email">email</label>
          <input
            className="form-control"
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
            <label htmlFor="username">username</label>
            <input
              className="form-control"
              onChange={this.update('username')}
              type="text"
              id="username"
              value={this.state.username}
            />
          </div>
          { this.signupField() }
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              className="form-control"
              onChange={this.update('password')}
              type="password"
              id="password"
              value={this.state.password}
            />
          </div>
          <button className="btn btn-square">{this.props.formType}</button>
        </form>
        <button onClick={this.switchForm}>{this.otherAuth()}</button>
      </div>
    );
  }
}

AuthForm.propTypes = {
  formType: React.PropTypes.string.isRequired,
  setAuthFormType: React.PropTypes.func.isRequired,
  submitHandler: React.PropTypes.func.isRequired,
};

export default AuthForm;
