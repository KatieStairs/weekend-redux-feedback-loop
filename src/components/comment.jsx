import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from  'react-router-dom';


function CommentForm() {
    const [commentScoreInput, setCommentScoreInput] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();

    const addCommentScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENT_SCORE',
            payload: commentScoreInput
        })
        history.push('/feedback')
    }

    return (
        <form onSubmit={addCommentScore}>
            <h2>Any comments you want to leave?</h2>
            <label>
                Comment?
                <input
                    type="text" 
                    value={commentScoreInput}
                    onChange={(event) => setCommentScoreInput(event.target.value)}
                    />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CommentForm;