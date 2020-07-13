import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='username'
          placeholder='Your Name' />
        <input
          type='text'
          name='q1'
          placeholder='Favorite singer' />
        <input
          type='text'
          name='q2'
          placeholder='Best friend' />
        <input
          type='text'
          name='q3'
          placeholder='Favorite color' />
        <input
          type='text'
          name='q4'
          placeholder='Favorite food' />
        <input
          type='text'
          name='q5'
          placeholder='Favorite programming language' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;