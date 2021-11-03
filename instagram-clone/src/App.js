import React, {useState, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Post from './Post';
import Button from '@mui/material/Button';
import { db } from './firebase';
import './App.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [posts, setPosts] = useState([]); 
  const [open, setOpen] = useState(false);

  useEffect(() =>{
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map( doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div className="App">
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={style}>
          <h2> This is a modal </h2>
        </div>
      </Modal>

      <div className = "app__header">
          <img
            className = "app_headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
      </div>

      <Button onClick={handleOpen}> SignUp </Button>

      {
        posts.map(({id, post}) => (
          <Post key={id} username= {post.username} caption= {post.caption} imageUrl= {post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
