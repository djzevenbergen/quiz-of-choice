import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (

    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <ul>
          <li>
            <input
              type='text'
              name='name'
              placeholder='Name of your quiz' />
            <input
              type='text'
              name='username'
              placeholder='Your Name' />
            <ul>
              <li>
                <input
                  type='text'
                  name='q1'
                  placeholder='Question 1' />
                <ul>
                  <li>
                    <input
                      type='text'
                      name='q1a'
                      placeholder='Option 1' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q1b'
                      placeholder='Option 2' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q1c'
                      placeholder='Option 3' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q1d'
                      placeholder='Option 4' />
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type='text'
                  name='q2'
                  placeholder='Question 2' />
                <ul>
                  <li>
                    <input
                      type='text'
                      name='q2a'
                      placeholder='Option 1' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q2b'
                      placeholder='Option 2' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q2c'
                      placeholder='Option 3' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q2d'
                      placeholder='Option 4' />
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type='text'
                  name='q3'
                  placeholder='Question 3' />
                <ul>
                  <li>
                    <input
                      type='text'
                      name='q3a'
                      placeholder='Option 1' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q3b'
                      placeholder='Option 2' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q3c'
                      placeholder='Option 3' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q3d'
                      placeholder='Option 4' />
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type='text'
                  name='q4'
                  placeholder='Question 4' />
                <ul>
                  <li>
                    <input
                      type='text'
                      name='q4a'
                      placeholder='Option 1' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q4b'
                      placeholder='Option 2' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q4c'
                      placeholder='Option 3' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q4d'
                      placeholder='Option 4' />
                  </li>
                </ul>
              </li>
              <li>
                <input
                  type='text'
                  name='q5'
                  placeholder='Question 5' />
                <ul>
                  <li>
                    <input
                      type='text'
                      name='q5a'
                      placeholder='Option 1' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q5b'
                      placeholder='Option 2' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q5c'
                      placeholder='Option 3' />
                  </li>
                  <li>
                    <input
                      type='text'
                      name='q5d'
                      placeholder='Option 4' />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
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