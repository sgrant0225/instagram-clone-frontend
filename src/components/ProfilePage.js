
import Header from './Header';
import { connect } from 'react-redux';
import { getAUser } from '../actions/actionCreators';
import {  Avatar } from '@mui/material';
import PhotoGrid from './PhotoGrid';


const ProfilePage = ({username, bio, photo, posts}) => {
   console.log(username)
    return (
    <div> 
        <Header />
      <div className="post">
        <div className="post_header">
         <Avatar 
           className="post_avatar"
           alt=""
           src={photo}
         />
           <h2>{username}</h2> 
      </div>
        <p>{bio}</p>
    </div>
    <div>
     {posts.map((post, i) => <PhotoGrid obj={post} key={i}/>)}
     </div>
  </div>
  )
}

const mapStateToProps = (state) => ({ username: state.user.username, bio: state.user.bio, photo: state.user.photo, posts: state.user.posts})

export default connect(mapStateToProps, { getAUser })(ProfilePage);