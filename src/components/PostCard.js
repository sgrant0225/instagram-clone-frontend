//presentational child component
//the link to the post form can go here where the post form goes
import React from 'react'
import '../Post.css';
import {  Avatar } from '@mui/material';
import Header from './Header'
 

function PostCard({image, caption}) {
  
    return (
    
        <div className="post">
          <div className="post_header">
            <Avatar 
               className="post_avatar"
               alt=""
               src="/static/images/avatar/1.jpg"
            />
             {/* header -> avatar + user with the username */} 
           <h3>Name</h3>
            </div>
            <img className="post_image" src={image} alt=""/>
            
            <h4 className="post_text"><strong>Name</strong> { caption } </h4>
            {/* username + caption  */}
        </div>
    )
}

export default PostCard;
