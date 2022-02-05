//presentational child component
//the link to the post form can go here where the post form goes
import React from 'react'
import '../Post.css';
import {  Avatar } from '@mui/material';
import CommentForm from './CommentForm';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import Comments from '../container/Comments';
import { Link, useHistory } from 'react-router-dom';
 

function PostCard({image, caption, username, photo, postId, likes}) {
   
   const [like, setLike]  = useState(0);
   const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
      setLike (like + 1);
      setIsClicked((isClicked) => !isClicked);
    }
     const color = isClicked ? "red" : "white";

 
    return (
    
        <div className="post">
          <div className="post_header">
            <Avatar className="post_avatar" alt="" src={photo} />
              <h3>{username}</h3>
           </div>
              <Link to={`/posts/${postId}`}><img className="post_image" src={image} alt=""/></Link> 
             <div>
               <img className= "post_heart" style={{ color }}src="https://img.icons8.com/windows/32/000000/like--v1.png" alt="" onClick={handleClick}/> <p> Likes: {like + likes} </p>
               <h4 className="post_text"><strong>{username}</strong> { caption } </h4>
            </div>
             <Comments /> 
             <CommentForm postId={postId} /> 
        </div>
    )
}





export default PostCard;
