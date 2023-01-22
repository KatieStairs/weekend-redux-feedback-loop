import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportForm() {
    const [supportScoreInput, setSupportScoreInput] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();

    const addSupportScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT_SCORE',
            payload: supportScoreInput
        })
        history.push('/comment')
    }

    return (
        <form onSubmit={addSupportScore}>
            <h2>How well are you being supported?</h2>
            <label>
                Support?
                <input
                    type="number" 
                    value={supportScoreInput}
                    onChange={(event) => setSupportScoreInput(event.target.value)}
                require />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SupportForm;