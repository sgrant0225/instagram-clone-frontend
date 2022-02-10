import React from "react";

function CommentCard({ username, text, id }){
    console.log(id)
    return <div className="post_comments">
     <p> <strong>{username}</strong> says: {text} </p> 
    </div>

}

export default CommentCard;