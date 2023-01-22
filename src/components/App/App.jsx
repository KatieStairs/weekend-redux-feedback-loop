import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import ReviewFeedback from '../feedbackReview.jsx'
import FeelingForm from '../feeling';
import UnderstandingForm from '../understanding';
import SupportForm from '../support';
import CommentForm from '../comment';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <div>
        <Route exact path="/">
          <FeelingForm />
        </Route>

        <Route exact path="/understanding">
          <UnderstandingForm />
        </Route>

        <Route exact path="/support">
          <SupportForm />
        </Route>

        <Route exact path="/comment">
          <CommentForm />
        </Route>

        <Route exact path="/review">
          <ReviewFeedback />
        </Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
