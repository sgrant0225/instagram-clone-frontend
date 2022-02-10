//presentational child component
//the link to the post form can go here where the post form goes
import React from 'react'
import '../Post.css';
import {  Avatar } from '@mui/material';
import CommentForm from './CommentForm';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import InstagramEmbed from 'react-instagram-embed'; 
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 40,
  p: 10,
  padding: 25
};


function PostCard({image, caption, username, photo, postId, likes, comments}) {
   const [open, setOpen] = useState(false);
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
             <div>
                <img className="post_image" src={image} alt="" onClick={() => setOpen(true)}/>
                <p>  <img className= "post_heart" style={{ color }}src="https://img.icons8.com/windows/32/000000/like--v1.png" alt="" onClick={handleClick} /> {like + likes} likes </p>
                <h4 className="post_text"><strong>{username}</strong> { caption } </h4>
             </div>
             <div className="post_comments">  
              {comments.map((comment) =>
                <p> <strong> {comment.username} </strong> says: {comment.text} </p>
              )}
             </div>
               <CommentForm postId={postId} /> 

          <Modal open={open} onClose={() => setOpen(false)}>
            <div style={style} >
             <center>
              <h4>{username}</h4>
             <Link to={`/posts/${postId}`}> <img className="post_image" src={image} alt=""  /></Link>
            </center>
          </div>
       </Modal>
               
        </div>


    )
}





export default PostCard;
