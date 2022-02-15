import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Input } from '@mui/material';
import { addPost, logout } from '../actions/actionCreators';
import { useHistory } from 'react-router-dom';


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

function Header({addPost, logout, photo}) {
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState('')
  const[image, setImage] = useState('')
  const history = useHistory();

  const createPost = (e) => {
    e.preventDefault();
    const newPost = {caption, image}
    addPost(newPost)
     newPost("")
  }

   const handleHomeButton = () => {
     history.push("/posts")
   }

   const handleProfileButton = () => {
     history.push('/profile')
   }
   const handleLogout = () => {
     logout(history.push("/login"))
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
               <img src="https://img.icons8.com/material-rounded/32/000000/home-page.png" alt="Home" onClick={handleHomeButton}/>
               <img src="https://img.icons8.com/ios-glyphs/32/000000/plus.png" alt="Add" onClick={() => setOpen(true)}/>
               <img className="avatar_image" src={photo} alt="profile" onClick={handleProfileButton}/>
               <img src="https://img.icons8.com/windows/32/000000/logout-rounded.png" alt="Sign Out" onClick={handleLogout}/>
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
            <img className="app__headerImage" src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
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

 const mapStateToProps = state => ({username: state.user.username, photo: state.user.photo})
//  (console.log(state.users.user.id))

export default connect(mapStateToProps, {addPost, logout})(Header);