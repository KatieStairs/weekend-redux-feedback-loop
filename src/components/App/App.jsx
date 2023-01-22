import React from 'react';
import axios from 'axios';
import './App.css';
import { useSelector } from 'react-redux';
import ReviewFeedback from '../feedbackReview.jsx'
import FeelingForm from '../feeling';
import UnderstandingForm from '../understanding';
import SupportForm from '../support';
import CommentForm from '../comment';

function App() {

  //this is the component that hooks into dogs' state so
  //I can use it here and in components
  // const dogs = useSelector((store) => store.dogs);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <div>
        <FeelingForm />
        <UnderstandingForm />
        <SupportForm />
        <CommentForm />

        {/* <ReviewFeedback /> */}
      </div>
    </div>
  );
}

export default App;
