import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CommentCard from '../components/CommentCard'
import { addComment } from '../actions/actionCreators'

function Comments({addComment, posts}) {

  // useEffect(() => { addComment() }, [addComment])

  console.log(posts)
   return  <div>
      {posts.map(comment => <CommentCard {...comment } key={comment.id} />)}
       
    </div>
    
}


const mapStateToProps = (state) => {
  console.log(state)
 return {posts: state.setPost.comments}
}

  
  

export default connect(mapStateToProps, {addComment} )(Comments);