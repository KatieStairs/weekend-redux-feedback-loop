import { useState } from 'react';
import { useDispatch } from 'react-redux';

function UnderstandingForm() {
    const [understandingScoreInput, setUnderstandingScoreInput] = useState('')

    const dispatch = useDispatch();

    const addUnderstandingScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING_SCORE',
            payload: understandingScoreInput
        })
    }

    return (
        <>
        <form onSubmit={addUnderstandingScore}>
            <h2>How well are you understanding the content?</h2>
            <label>
                Understanding?
                <input
                    score="score"
                    type="number" 
                    value={understandingScoreInput}
                    onChange={(event) => setUnderstandingScoreInput(event.target.value)}
                    />
            </label>
            <button>Submit</button>
        </form>
        
        <button>Next</button>
        </>
    )
}

export default UnderstandingForm;