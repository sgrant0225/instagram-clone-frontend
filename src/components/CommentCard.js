function CommentCard({ commenter, comment}){
    return <div className="comment">
     <p> <strong>{commenter}</strong> {comment} </p> 
    </div>

}

export default CommentCard;