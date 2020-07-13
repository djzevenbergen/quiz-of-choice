import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function EditQuizForm(props) {
  const { quiz } = props;
  const firestore = useFirestore();

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditQuiz();

    const propertiesToUpdate = {
      name: event.target.name.value,
      username: event.target.username.value,
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      q4: event.target.q4.value,
      q5: event.target.q5.value,
    }
    return firestore.update({ collection: 'quizzes', doc: quiz.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditQuizFormSubmission}
        buttonText="Update Quiz" />
    </React.Fragment>
  );
}

EditQuizForm.propTypes = {
  onEditQuiz: PropTypes.func
}

export default EditQuizForm;