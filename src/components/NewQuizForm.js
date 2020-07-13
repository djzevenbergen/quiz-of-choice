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
        username: event.target.username.value,
        q1: event.target.q1.value,
        q2: event.target.q2.value,
        q3: event.target.q3.value,
        q4: event.target.q4.value,
        q5: event.target.q5.value,
        timeCreated: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        // Don't forget to change the name of the function here as well.
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;