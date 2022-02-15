import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Modal } from '@mui/material';
import '../Profile.css'
import { deletePost } from '../actions/actionCreators';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 40,
    p: 10,
    padding: 25
  };
  


function PhotoGrid(props, deletePost){
    const [open, setOpen] = useState(false);
    

    const handleClick = (e) => {
      e.preventDefault();
      const postId = props.obj.id
      console.log("delete button is clicked")
      //const newObj = props.obj.filter((post) => post.id !== postId)
      props.deletePost(postId)
    }


   return (
       <div className="wrapper">
        
           <img className="wrapper-grid-col-2 wrapper-grid-row-2" src={props.obj.image} alt="Profile Pics" onClick={() => setOpen(true)}/>
           <img src={props.obj.image} alt="Profile Pics"/>
           <img src={props.obj.image} alt="Profile Pics"/>
           
          
           

           <Modal open={open} onClose={() => setOpen(false)}>
            <div style={style} >
             <center>
                <img className="post_image" src={props.obj.image} alt=""  />
                <h4 className="post_text"><strong>{props.obj.username}</strong> { props.obj.caption } </h4> 
                <img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png" alt="Delete" onClick={handleClick}/>
              </center>
             
          </div>
       </Modal>
        
       </div>
   )
}


export default connect(null, { deletePost }) (PhotoGrid);