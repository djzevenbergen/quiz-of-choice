import React from "react";
import Header from "./Header";
import QuizControl from "./QuizControl";
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
          <QuizControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;