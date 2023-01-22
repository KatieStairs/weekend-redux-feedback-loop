import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UnderstandingForm() {
    const [understandingScoreInput, setUnderstandingScoreInput] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();

    const addUnderstandingScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING_SCORE',
            payload: understandingScoreInput
        })
        history.push('/support')
    }

    return (
        <>
        <form onSubmit={addUnderstandingScore}>
            <h2>How well are you understanding the content?</h2>
            <label>
                Understanding?
                <input
                    type="number" 
                    value={understandingScoreInput}
                    onChange={(event) => setUnderstandingScoreInput(event.target.value)}
                require />
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default UnderstandingForm;