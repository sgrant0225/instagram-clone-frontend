// import React from 'react'
// import Modal from '@mui/material/Modal';
// import { Button, Input } from '@mui/material';
// import { useState } from 'react';
// import { connect } from 'react-redux';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   height: 300,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };


// function PostImageUpload() {
    
//     const [open, setOpen] = useState(false);
//     const [caption, setCaption] = useState('')
//     const[image, setImage] = useState('')
  
//   return (


//     <div>
//       <Modal
//         open={open}
//         onClose={() => setOpen(false)}
      
//       >
//         <div style={style} >
//         <form>   
    
//          <Input area-label="Enter your caption" type="text" placeholder="Caption"  />
      
//          <Input area-aria-label='Place Your Image URL' type="text" placeholder="Image"   />
        
      
//          <button type="submit" value="Create Post" className="btn" >
//            Create Post
//          </button> 
//        </form>    
//       </div>
//       </Modal>
//       <button onClick={() => setOpen(true)}> <img src="https://img.icons8.com/ios-glyphs/32/000000/plus.png" alt="Add"/></button>
//     </div>
//     )
// }

// export default connect ()(PostImageUpload);