import React from 'react';
import firebase from 'firebase/app';

function SignIn() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        console.log('successfully signed up!');
      }).catch(function (error) {
        console.log(error.message);
      });
    } else {
      <p>Please verify your confirm password matches</p>
    }
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='Email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password' />
        <button type='submit'>Sign Up</button>
      </form>

      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signInEmail'
          placeholder='Email' />
        <input
          type='password'
          name='signInPassword'
          placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>

      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign Out</button>
    </React.Fragment>

  );
}

export default SignIn