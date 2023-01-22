import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function FeelingForm() {
    const [feelingScoreInput, setFeelingScoreInput] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();

    const addFeelingScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_FEELING_SCORE',
            payload: feelingScoreInput
        })
        history.push('/understanding')
}

    return (
        <>
        <form onSubmit={addFeelingScore}>
            <h2>How are you feeling today?</h2>
            <label>
                Feeling?
                <input
                    type="number" 
                    value={feelingScoreInput}
                    onChange={(event) => setFeelingScoreInput(event.target.value)}
                required />
            </label>
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default FeelingForm;