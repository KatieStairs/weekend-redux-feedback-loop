import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SupportForm() {
    const [supportScoreInput, setSupportScoreInput] = useState('')

    const dispatch = useDispatch();

    const addSupportScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT_SCORE',
            payload: supportScoreInput
        })
    }

    return (
        <>
        <form onSubmit={addSupportScore}>
            <h2>How well are you being supported?</h2>
            <label>
                Support?
                <input
                    score="score"
                    type="number" 
                    value={supportScoreInput}
                    onChange={(event) => setSupportScoreInput(event.target.value)}
                    />
            </label>
            <button>Submit</button>
        </form>
        
        <button>Next</button>
        </>
    )
}

export default SupportForm;