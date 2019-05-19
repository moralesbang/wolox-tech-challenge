import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ageRange } from "../constants";
import { addUser } from "../api";

class Login extends Component {
  constructor(props) {
    super(props);

    this.formValid = this.formValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createAgeOptions = this.createAgeOptions.bind(this);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        age: ageRange.init,
        termsChecked: false
      },
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        termsChecked: ""
      }
    };
  }

  formValid() {
    let valid = false;
    let { formErrors, user } = this.state;
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    if (user.firstName.length === 0) {
      formErrors.firstName = "Debes poner un nombre";
    } else if (user.lastName === 0) {
      formErrors.lastName = "Debes poner un apellido";
    } else if (!emailRegex.test(user.email)) {
      formErrors.email = "Dirección de email inválida";
    } else if (!user.termsChecked) {
      formErrors.termsChecked =
        "Debes aceptar los términos y condicoones para continuar";
    } else {
      valid = true;
    }

    this.setState({ formErrors });
    return valid;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitting");
    if (this.formValid()) {
      addUser(this.state.user);
    }
  }

  handleChange(e) {
    const { name } = e.target;
    const value = name === "termsChecked" ? e.target.checked : e.target.value;
    const { user } = this.state;

    user[name] = value;
    this.setState({ user });
  }

  createAgeOptions() {
    let ageOptions = [];

    for (let i = ageRange.init; i <= ageRange.end; i++) {
      ageOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return ageOptions;
  }

  render() {
    localStorage.getItem("userData") && this.props.history.push("/products");

    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="firsName"
              name="firstName"
              placeholder="Jane"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="janedoe@example.com"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="age">Edad</label>
            <select name="age" id="age" onChange={this.handleChange}>
              {this.createAgeOptions()}
            </select>
          </div>

          <div>
            <input
              type="checkbox"
              name="termsChecked"
              id="termsChecked"
              onChange={this.handleChange}
            />
            Acepto los terminos
          </div>

          <button type="submit" className="">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
