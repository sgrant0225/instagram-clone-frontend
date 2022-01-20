//presentational child component
//the link to the post form can go here where the post form goes
import React from 'react'
import '../Post.css';
import {  Avatar } from '@mui/material';

 //const renderPosts = this.props.posts.map((post) => <Post key={post.id} image={post.image} caption={post.caption} />)

function PostCard({image, caption, username}) {
    return (
        <div className="post">
          <div className="post_header">
            <Avatar 
               className="post_avatar"
               alt={username}
               src="/static/images/avatar/1.jpg"
            />
             {/* header -> avatar + user with the username */} 
           <h3>{username}</h3>
            </div>
            <img className="post_image" src={image} alt=""/>
            
            <h4 className="post_text"><strong>{username}</strong> { caption } </h4>
            {/* username + caption  */}
        </div>
    )
}

export default PostCard;
