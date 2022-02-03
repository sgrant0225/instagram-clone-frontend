//presentational child component
//the link to the post form can go here where the post form goes
import React from 'react'
import '../Post.css';
import {  Avatar } from '@mui/material';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';

 

function PostCard({image, caption, username, photo}) {
 
    return (
    
        <div className="post">
          <div className="post_header">
            <Avatar 
               className="post_avatar"
               alt=""
               src={photo}
            />
              <h3>{username}</h3>
           </div>
             <img className="post_image" src={image} alt=""/>
             <h4 className="post_text"><strong>{username}</strong> { caption } </h4>
             <CommentCard />
             <CommentForm />
        </div>
    )
}



export default PostCard;
