// SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmailList from "../../utils/validateEmailList";
import validateSenderEmail from "../../utils/validateSenderEmail";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          defaultValue={name === "sender" ? "no-reply@emaily.com" : ""}
        />
      );
    });
  }
  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">chevron_right</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmailList(values.recipients || "");
  errors.sender = validateSenderEmail(values.sender || "");

  _.each(formFields, ({ name }) => {
    if (!values[name] && name !== "sender") {
      errors[name] = `You must provide ${
        name === "recipients" ? "recipients" : "a " + name
      }`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
