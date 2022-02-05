import React from 'react';
import { connect } from 'react-redux';
import '../Profile.css'

const PhotoGrid = (props) => {
    console.log(props)
   return (
       <div className="profile_wrapper">
           <div className="profile_column">
           <img className="profile_image" src={props.obj.image}/>
        </div>
       </div>
   )
}

// const mapStateToProps = (state) => {
//     return {posts: state.users.user.posts}
    
// }
export default (PhotoGrid)