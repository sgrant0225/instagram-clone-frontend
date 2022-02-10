import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/actionCreators';
import { useState } from 'react'
import '../Post.css';

function CommentForm({ addComment, postId}) {
   const [text, setText] = useState("")

    const postComment = (e) => {
        e.preventDefault();
        const newComment = {text}
       addComment(newComment, postId)
        setText("")
    }

    
 return (
    <div> 
      <form className="post_commentBox">
         <img className='post_smileyIcon' src="https://img.icons8.com/ios/30/000000/smiling.png"/>
         <input className="post_commentInput" type="text" placeholder='Add a comment...' value={text} onChange={(e) => setText(e.target.value)} />
         <button disabled={!text} className="post_button" type="submit" onClick={postComment}> Post </button>
      </form>
    </div>
   )
}

// const mapStateToProps = (state) => ({})

export default connect(null, {addComment} )(CommentForm);