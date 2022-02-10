import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../actions/actionCreators';
import CommentCard from './CommentCard';
import PhotoGrid from './PhotoGrid';





function PostShow({getPost, post_comments }){
  console.log(post_comments)
  const routeId = useParams().id
    useEffect(() => {
        getPost(routeId)
    }, [getPost, routeId]) 
    
     return (
      <div>  
          {post_comments.map((comment) => <CommentCard username={comment.username}  text={comment.text} key={comment.id}/>)}
      </div>
     )
}
 const mapStateToProps = (state) => ({post_comments: state.setPost.comments})

export default connect(mapStateToProps, { getPost } )(PostShow);