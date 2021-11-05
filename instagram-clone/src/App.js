import React, {useState, useEffect} from 'react'
import Modal from '@mui/material/Modal';
import Post from './Post';
import Button from '@mui/material/Button';
import { db } from './firebase';
import { Input } from '@mui/material';
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

  const [posts, setPosts] = useState([]); 
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() =>{
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map( doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })
  }, []);

  const signUp = (event) => {

  }

  return (
    <div className="App">

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={style} className="Login">
          <center>
            <img
              className = "app_headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />

            <Input 
            type="text" 
            placeholder="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
            type="text" 
            placeholder="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
            type="text" 
            placeholder="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={signUp}> SignUp </Button>

          </center>
        </div>
      </Modal>

      <div className = "app__header">
          <img
            className = "app_headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
      </div>

      <Button onClick={() => setOpen(true)}> SignUp </Button>
      
      {
        posts.map(({id, post}) => (
          <Post key={id} username= {post.username} caption= {post.caption} imageUrl= {post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
