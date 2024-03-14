
import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      this.validateField(event.target.name, event.target.value)
    });
  }

  validateField(fieldName, value) {
    let errors = this.state.errors;

    switch(fieldName) {
      case 'email': 
        errors.email = 
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length >= 6
            ? ''
            : 'Password should be at least 6 characters long!';
        break;
      default:
        break;
    }

    this.setState({errors});
  }

  render() {
    return (
      <form>
        <h3  data-testid='Head'>Sign In</h3>
        <div className="mb-3">
          <label data-testid='Email_Label'>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.handleChange}
            data-testid='Email_Textbox'
          />
          {this.state.errors.email && 
            <p className="error" data-testid='Email_ErrorMsg'>{this.state.errors.email}</p>}
        </div>
        <div className="mb-3">
          <label  data-testid='Pwd_Label'>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange}
            data-testid='Pwd_Textbox'
          />
          {this.state.errors.password && 
            <p className="error"  data-testid='Pwd_ErrorMsg'>{this.state.errors.password}</p>}
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary"  data-testid='Submit_btn'>
            Submit
          </button>
        </div>
        <br></br>
        <p  data-testid='NewUser_Msg'>Doesn't have an account? <a href="/sign-up">Register here</a></p>
        <p className="forgot-password text-right"  data-testid='F_Pwd'>
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
