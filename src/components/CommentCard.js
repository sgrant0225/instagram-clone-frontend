import React from "react";

function CommentCard({ username, text }){
    console.log(text)
    return <div className="post_comments">
     <p> <strong>{username}</strong> says: {text} </p> 
    </div>

}

export default CommentCard;