//presentational child component
//the link to the post form can go here where the post form goes
import React from 'react'
import '../Post.css';
import {  Avatar } from '@mui/material';

 

function PostCard({image, caption, username}) {
  
    return (
    
        <div className="post">
          <div className="post_header">
            <Avatar 
               className="post_avatar"
               alt=""
               src="/static/images/avatar/1.jpg"
            />
              <h3>{username}</h3>
           </div>
             <img className="post_image" src={image} alt=""/>
             <h4 className="post_text"><strong>{username}</strong> { caption } </h4>
        </div>
    )
}



export default PostCard;
