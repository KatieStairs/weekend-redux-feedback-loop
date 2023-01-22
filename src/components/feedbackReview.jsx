import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function ReviewFeedback() {

    const feedback = useSelector((store) => store.feedback);

    const dispatch = useDispatch();

    useEffect(() => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then ((response) => {
            console.log('response from GET', response.data);
            dispatch({
                type: 'SET_FEEDBACK_FOR_REVIEW',
                payload: response.data
            })
        }).catch((error) => {
            console.error('Error in feedback GET', error);
        })
    }, [])

    return (
        <>
            <h5>Review Feedback</h5>
            <ul>
                {feedback.map((feedback, id) => {
                    return <li key={id}>{feedback.feeling}</li>
                })}
            </ul>
            <button>Submit</button>
        </>
    )
}

export default ReviewFeedback;