import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import { logout } from '../actions/usersActions';
import Modal from '@mui/material/Modal';
import { Button, Input } from '@mui/material';
import { addPost } from '../actions/getPosts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 40,
  p: 4,
  padding: 25
};

function Header({addPost, user_id, logout}) {
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState('')
  const[image, setImage] = useState('')

  const createPost = (e) => {
    e.preventDefault();
    const newPost = {caption, image, user_id}
     addPost(newPost)
     
      
  }

    return (
     <div className="app">
       <div className="app_header">
          <img 
            className="app_headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" 
            alt="" 
          />
         
           <div className="navigation_icons">
             <div className="nav_row">
               <button><img src="https://img.icons8.com/material-rounded/32/000000/home-page.png" alt="Home"/></button>
               <button onClick={() => setOpen(true)}> <img src="https://img.icons8.com/ios-glyphs/32/000000/plus.png" alt="Add"/></button>
               <button onClick={logout}><img src="https://img.icons8.com/windows/32/000000/logout-rounded.png" alt="Sign Out"/></button> 
            </div>
          </div>
      </div>

    <Modal 
       open={open}
       onClose={() => setOpen(false)}
      >
      <div style={style} >
        <form className="app_createPost" onSubmit={createPost}> 
          <center>
            <img className="app__headerImage" src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </center>
            <Input area-label="Enter your caption" type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
            <Input area-aria-label='Place Your Image URL' type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)}  />
            <Button type="submit">Create Post</Button> 
       </form>    
      </div>
    </Modal>
  
    </div>
    )
 }

 const mapStateToProps = state => ({user_id: state.users.user.id })
//  (console.log(state.users.user.id))

export default connect(mapStateToProps, {addPost, logout})(Header);