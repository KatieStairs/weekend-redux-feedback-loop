import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CommentForm() {
    const [commentScoreInput, setCommentScoreInput] = useState('')

    const dispatch = useDispatch();

    const addCommentScore = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENT_SCORE',
            payload: commentScoreInput
        })
    }

    return (
        <>
        <form onSubmit={addCommentScore}>
            <h2>Any comments you want to leave?</h2>
            <label>
                Comment?
                <input
                    score="score"
                    type="number" 
                    value={commentScoreInput}
                    onChange={(event) => setCommentScoreInput(event.target.value)}
                    />
            </label>
            <button>Submit</button>
        </form>
        
        <button>Next</button>
        </>
    )
}

export default CommentForm;