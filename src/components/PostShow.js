import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Header from './Header';
import { getPost } from '../actions/actionCreators';
import { useParams } from 'react-router-dom';

function PostShow({getPost, posts}){
  //debugger
  const routeId = useParams().id
    useEffect(() => {
     getPost(routeId)
    }, [getPost, routeId])  
  
  // const showPost = posts.map((p) => <Post {...posts} /> )

     return (
      <div>  
        <Header />
          {<Post {...posts} key={posts.id}/>}
      </div>
      
     )
    
}
 const mapStateToProps = (state) => {
    console.log(state.setPost)
   return {posts: state.setPost }
 }
  

export default connect(mapStateToProps, {getPost} )(PostShow);