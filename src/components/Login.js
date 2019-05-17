import React, { Component } from "react";
import { ageRange } from "../constants";
import { addUser } from "../api";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTermsChecked = this.handleChangeTermsChecked.bind(this);
    this.createAgeOptions = this.createAgeOptions.bind(this);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      age: ageRange.init,
      termsChecked: false,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        termsChecked: ""
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    addUser(this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName = value.length < 0 ? "Debes poner un nombre" : "";
        break;
      case "lastName":
        formErrors.lastName = value.length < 0 ? "Debes poner un apellido" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Direccióń de email inválida";
        break;
      case "age":
        let age = parseInt(value);
        formErrors.age =
          age > ageRange.end || age < ageRange.init
            ? "Edad está en un rango no permitido"
            : "";
        break;
      case "termsChecked":
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  }

  handleChangeTermsChecked(e) {
    const { name, checked } = e.target;
    let error = "";

    if (!checked) {
      error = checked
        ? ""
        : "Debes aceptar los términos y condiciones para continuar";
    }

    this.setState({
      formErrors: { termsChecked: error },
      [name]: checked
    });
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
    return (
      <div>
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit}>
          <div class="mb-6">
            <label htmlFor="name" class="label">
              Nombre
            </label>
            <input
              type="text"
              class="input"
              id="firsName"
              name="firstName"
              placeholder="Jane"
              onChange={this.handleChange}
            />
          </div>

          <div class="mb-6">
            <label htmlFor="lastName" class="label">
              Apellido
            </label>
            <input
              type="text"
              class="input"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              onChange={this.handleChange}
            />
          </div>

          <div class="mb-6">
            <label htmlFor="email" class="label">
              E-mail
            </label>
            <input
              type="email"
              class="input"
              name="email"
              id="email"
              placeholder="janedoe@example.com"
              onChange={this.handleChange}
            />
          </div>

          <div class="mb-6">
            <label htmlFor="age" class="label">
              Edad
            </label>
            <select name="age" id="age" onChange={this.handleChange}>
              {this.createAgeOptions()}
            </select>
          </div>

          <div class="mb-6">
            <input
              type="checkbox"
              name="termsChecked"
              id="termsChecked"
              onChange={this.handleChangeTermsChecked}
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
