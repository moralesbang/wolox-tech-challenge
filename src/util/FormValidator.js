import { isEmpty } from "lodash";

const hasValidEmailFormat = email => {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return emailRegex.test(email);
};

export default class FormValidator {
  constructor(data) {
    this.fields = data;
  }

  validate = () => {
    switch (true) {
      case isEmpty(this.fields.firstName):
        return "Debes poner tu nombre";
      case isEmpty(this.fields.lastName):
        return "Debes poner tu apellido";
      case hasValidEmailFormat(this.fields.email):
        return "Tu dirección de email es inválida";
      case !this.fields.termsChecked:
        return "Debes aceptar los términos y condiciones para continuar";
      default:
        return null;
    }
  };
}
