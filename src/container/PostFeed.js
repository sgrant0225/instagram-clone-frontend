import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/actionCreators';
import PostCard from '../components/PostCard'
import Header from '../components/Header'

function PostFeed({getPosts, posts}) {
    
   useEffect(() => { getPosts() }, [getPosts])
        
    const renderPosts = posts.map((post) => <PostCard key={post.id} image={post.image} caption={post.caption} likes={post.likes} username={post.username} photo={post.photo} postId={post.id} comments={post.comments}  />)
        return (
        <div>
           <h4>
              <Header />
                 {renderPosts}
                
             </h4>
        </div>
        )
      }
   const mapStateToProps = (state) => {
      return {posts: state.posts}
       }
       
export default connect(mapStateToProps, { getPosts} )(PostFeed);


// class PostFeed extends Component {
//      componentDidMount() {
//         this.props.getPosts();
//     }

//     // componentDidUpdate() {
//     //     this.props.getPosts()
//     // }
//       render() {
//         const renderPosts = this.props.posts.map((post) => 
//         <PostCard key={post.id} image={post.image} caption={post.caption} username={post.user.username} photo={post.user.photo} postId={post.id}/>)
//        return (
//         <div> 
//              <h4>
//                <Header />
//                  {renderPosts}
//              </h4>
//         </div>
//        )
//     }
    
// }

