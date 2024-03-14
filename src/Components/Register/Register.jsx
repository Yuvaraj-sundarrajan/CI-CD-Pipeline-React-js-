import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
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
      case 'firstName': 
        errors.firstName = 
          value.trim() !== ''
            ? ''
            : 'First name is required!';
        break;
      case 'lastName': 
        errors.lastName = 
          value.trim() !== ''
            ? ''
            : 'Last name is required!';
        break;
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
      case 'confirmPassword':
        errors.confirmPassword =
          value === this.state.password
            ? ''
            : 'Passwords do not match!';
        break;
      default:
        break;
    }

    this.setState({errors});
  }

  render() {
    return (
      <form>
        <h3>Register</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            onChange={this.handleChange}
          />
          {this.state.errors.firstName && 
            <p className="error">{this.state.errors.firstName}</p>}
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          {this.state.errors.lastName && 
            <p className="error">{this.state.errors.lastName}</p>}
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          {this.state.errors.email && 
            <p className="error">{this.state.errors.email}</p>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          {this.state.errors.password && 
            <p className="error">{this.state.errors.password}</p>}
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChange}
          />
          {this.state.errors.confirmPassword && 
            <p className="error">{this.state.errors.confirmPassword}</p>}
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">Login?</a>
        </p>
      </form>
    )
  }
}
