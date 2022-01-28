//This to be all the post displayed from every user
//map props
//use connect 

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/getPosts';
//import { useEffect } from 'react'
import PostCard from '../components/PostCard'
 import Header from '../components/Header'

// function PostFeed({getPosts, posts}) {
    
//     useEffect(getPosts, [getPosts])
        
//     console.log(posts)
//         return (
//             <div className="app">
                 // {posts.map(post=> <Post {...post} key={post.id}/>)}
//             </div>
//         )
        //}

class PostFeed extends Component {
     componentDidMount() {
        console.log(this.props)
        this.props.getPosts();
    }

    // componentDidUpdate() {
    //     this.props.getPosts()
    // }
      render() {
        
        console.log(this.props)
        const renderPosts = this.props.posts.posts.map((post) => <PostCard key={post.id} image={post.image} caption={post.caption} username={post.user.username} user_id={post.user.id} />)
       return (
        <div> 
             <h4>
               <Header />
                 {renderPosts}
             </h4>
        </div>
       )
    }
    
}

// posts.map(({id, post}) => (
//   <Post user={user} key={id} postId={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
// ))


const mapStateToProps = (state) => {
  return {
    posts: state.posts
    
  }
}
export default connect(mapStateToProps, { getPosts} )(PostFeed);
