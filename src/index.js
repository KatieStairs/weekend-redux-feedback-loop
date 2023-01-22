import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//reducers, state won't have to be an array, but needs an 
//inital value. Always return state.
const feelingScore = (state=[], action) => {
    //CAN'T BE IN AN OBJECT TO ITERATE ONTO THE DOM OR SOMETHING
    //this should probably be the feeling thing and I can make it
    //into an array in feeling.jsx
    if (action.type === 'ADD_FEELING_SCORE') {
        console.log('in ADD feeling', action)
        const newFeelingScore = action.payload;
        // ID needs to be sorted here from the object
        const newFeelingId = state.length + 1;

        const newFeeling = {
            id: newFeelingId,
            feeling: newFeelingScore
        }

        let newFeelingArray = [...state]
        
        newFeelingArray.push(newFeeling)
        
        return newFeelingArray;

        // in the future will write ` return [...state, newFeeling] ` 
        // instead of lines 27-31.
    }
    return state;
}

const understandingScore = (state=[], action) => {
    if (action.type === 'ADD_UNDERSTANDING_SCORE') {
        console.log('in ADD understanding', action)
        const newUnderstandingScore = action.payload;
        const newUnderstandingId = state.length + 1;

        const newUnderstanding = {
            id: newUnderstandingId,
            understanding: newUnderstandingScore
        }

        let newUnderstandingArray = [...state]
        
        newUnderstandingArray.push(newUnderstanding)
        
        return newUnderstandingArray;
    }
    return state;
}

const supportScore = (state=[], action) => {
    if (action.type === 'ADD_SUPPORT_SCORE') {
        console.log('in ADD support', action)
        const newSupportScore = action.payload;
        const newSupportId = state.length + 1;

        const newSupport = {
            id: newSupportId,
            support: newSupportScore
        }

        let newSupportArray = [...state]
        
        newSupportArray.push(newSupport)
        
        return newSupportArray;
    }
    return state;
}

const commentScore = (state=[], action) => {
    if (action.type === 'ADD_COMMENT_SCORE') {
        console.log('in ADD Comment', action)
        const newCommentScore = action.payload;
        const newCommentId = state.length + 1;

        const newComment = {
            id: newCommentId,
            Comment: newCommentScore
        }

        let newCommentArray = [...state]
        
        newCommentArray.push(newComment)
        
        return newCommentArray;
    }
    return state;
}

const feedback = (state=[], action) => {
    switch (action.type) {
        case 'SET_FEEDBACK_FOR_REVIEW':
            return action.payload;
        default:
            return state;
    }
}

//redux store & combineReducers
const reduxStore = createStore(
    combineReducers({
        feelingScore,
        understandingScore,
        supportScore,
        commentScore,
        feedback   
    }),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById('root')
);
registerServiceWorker();
