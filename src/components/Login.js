import React, { Component } from "react";
import { ageRange } from "../constants";
import { addUser } from "../api";
import stylesForm from "../assets/styles/Form.module.scss";
import ErrorList from "./Alert";
import FormValidator from "../util/FormValidator";

const createAgeOptions = () => {
  let ageOptions = [];

  for (let i = ageRange.init; i <= ageRange.end; i++) {
    ageOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return ageOptions;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.ageOptions = createAgeOptions();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        age: ageRange.init,
        termsChecked: false
      },
      formError: null
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const error = new FormValidator(this.state.user).validate();

    if (error) {
      this.setState({ formError: error });
    } else {
      await addUser(this.state.user);
      this.props.history.push("/products");
    }
  }

  handleChange(e) {
    const { name } = e.target;
    const value = name === "termsChecked" ? e.target.checked : e.target.value;
    const { user } = this.state;

    user[name] = value;
    this.setState({ user });
  }

  render() {
    localStorage.getItem("userData") && this.props.history.push("/products");

    return (
      <div className={stylesForm.wrapper}>
        <h3 className={stylesForm.title}>Log In</h3>
        {this.state.formError && <ErrorList message={this.state.formError} />}
        <form onSubmit={this.handleSubmit}>
          <div className={stylesForm.field}>
            <label htmlFor="name" className={stylesForm.label}>
              Nombre
            </label>
            <input
              type="text"
              id="firsName"
              name="firstName"
              className={stylesForm.input}
              placeholder="Jane"
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>

          <div className={stylesForm.field}>
            <label htmlFor="lastName" className={stylesForm.label}>
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={stylesForm.input}
              placeholder="Doe"
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>

          <div className={stylesForm.field}>
            <label htmlFor="email" className={stylesForm.label}>
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={stylesForm.input}
              placeholder="janedoe@example.com"
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>

          <div className={stylesForm.field}>
            <label htmlFor="age" className={stylesForm.label}>
              Edad
            </label>
            <select
              name="age"
              id="age"
              className={stylesForm.select}
              onChange={this.handleChange}
            >
              {this.ageOptions}
            </select>
          </div>

          <div className={stylesForm.field}>
            <input
              type="checkbox"
              name="termsChecked"
              className={stylesForm.checkbox}
              id="termsChecked"
              onChange={this.handleChange}
            />
            <span className={stylesForm.checkboxDesc}>
              Acepto los términos y condiciones
            </span>
          </div>

          <button type="submit" className={stylesForm.submit}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
