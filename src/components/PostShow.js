import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../actions/actionCreators';


function PostShow({getPost}){
  const routeId = useParams().id
    useEffect(() => {
        getPost(routeId)
    }, [getPost, routeId]) 

     return (
         <p>You are in the post show page </p>
     
     )
}
 const mapStateToProps = (state) => (console.log(state))

export default connect(null, { getPost } )(PostShow);