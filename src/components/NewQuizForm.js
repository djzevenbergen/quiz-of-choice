import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewQuizForm(props) {

  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();
    props.onNewQuizCreation();

    return firestore.collection('quizzes').add(
      {
        name: event.target.name.value,
        userEmail: props.auth.currentUser.email,
        username: event.target.username.value,
        q1: event.target.q1.value,
        q1a: event.target.q1a.value,
        q1b: event.target.q1b.value,
        q1c: event.target.q1c.value,
        q1d: event.target.q1d.value,
        q2: event.target.q2.value,
        q2a: event.target.q2a.value,
        q2b: event.target.q2b.value,
        q2c: event.target.q2c.value,
        q2d: event.target.q2d.value,
        q3: event.target.q3.value,
        q3a: event.target.q3a.value,
        q3b: event.target.q3b.value,
        q3c: event.target.q3c.value,
        q3d: event.target.q3d.value,
        q4: event.target.q4.value,
        q4a: event.target.q4a.value,
        q4b: event.target.q4b.value,
        q4c: event.target.q4c.value,
        q4d: event.target.q4d.value,
        q5: event.target.q5.value,
        q5a: event.target.q5a.value,
        q5b: event.target.q5b.value,
        q5c: event.target.q5c.value,
        q5d: event.target.q5a.value,
        timeCreated: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        // Don't forget to change the name of the function here as well.
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Add New Quiz" />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  auth: PropTypes.object,
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;