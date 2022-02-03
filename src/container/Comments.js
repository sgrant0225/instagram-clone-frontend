import React from 'react'
import { connect } from 'react-redux'
import { CommentCard } from '../components/CommentCard'


function Comments({posts}) {
  
  

  return  <div className="all_comments">
        {posts.map(post => <CommentCard commenter={post.comments.username} comment={post.comments.text} key={post.comments.id} />)}
    </div>
    
}


const mapStateToProps = (state) => ({posts: state.posts})

export default connect(mapStateToProps )(Comments);