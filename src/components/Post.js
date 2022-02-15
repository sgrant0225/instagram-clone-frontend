import React, { useEffect } from 'react';
import {  Avatar } from '@mui/material';
import { getPost } from '../actions/actionCreators';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';

function Post(props) {
  console.log(props.comments)
    
//     useEffect(() => {
//       getPost(routeId)
//   }, []) 

 return (

    //   <h4>You are in the show page!!</h4>
     
        <div className="post">
          <div className="post_header">
             <Avatar className="post_avatar" alt="" src={props.photo} />
               <h3>{props.username}</h3>
            </div>
             <div>
                <img className="post_image" src={props.image} />
                <p className= "post_heart"><img src="https://img.icons8.com/windows/32/000000/like--v1.png" alt="" />  </p>
                <h4 className="post_text"><strong>{props.username}</strong> { props.caption } </h4>
             </div>
             <div className="post_comments">  
               {props.comments.map((comment) =>
                 <p><strong> {comment.username}</strong> says: {comment.text}</p>
              )}
             </div>
               <CommentForm postId={props.id} /> 
               
        </div>
     )

}

export default connect(null, {getPost})(Post);