//presentational child component
//the link to the post form can go here where the post form goes
import React from 'react'
import '../Post.css';
import {  Avatar } from '@mui/material';

function Post() {
    return (
        <div className="post">
          <div className="post_header">
            <Avatar 
               className="post_avatar"
               alt="Sharnell"
               src="/static/images/avatar/1.jpg"
            />
             {/* header -> avatar + user with the username */} 
            <h3>Username</h3>
            </div>
            <img className="post_image" src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt=""/>
            {/* image */}
            <h4 className="post_text"><strong>code_nellz</strong> For my final project I'm  building an instagram clone using React Redux </h4>
            {/* username + caption  */}
        </div>
    )
}

export default Post
