import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FeelingForm() {
    const [feelingScoreInput, setFeelingScoreInput] = useState('')

    const dispatch = useDispatch();

    const addFeelingScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feelingScoreInput
        })
    }

    return (
        <>
        <form onSubmit={addFeelingScore}>
            <h2>How are you feeling today?</h2>
            <label>
                Feeling?
                <input
                    score="score"
                    type="number" 
                    value={feelingScoreInput}
                    onChange={(event) => setFeelingScoreInput(event.target.value)}
                    />
            </label>
            <button>Submit</button>
        </form>
        
        <button>Next</button>
        </>
    )
}

export default FeelingForm;