
import Header from './Header';
import { connect } from 'react-redux';
import { getAUser } from '../actions/usersActions';
import {  Avatar } from '@mui/material';
import PhotoGrid from './PhotoGrid';


const ProfilePage = ({username, email, bio, photo, posts}) => {

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
        <p>{email}</p>
        <p>{bio}</p>
    </div>
    <div>
     {posts.map((post, i) => <PhotoGrid obj={post} key={i}/>)}
     </div>
  </div>
  )
}

const mapStateToProps = (state) => ({ username: state.users.user.username, email: state.users.user.email, bio: state.users.user.bio, photo: state.users.user.photo, posts: state.users.user.posts})

export default connect(mapStateToProps, { getAUser })(ProfilePage);