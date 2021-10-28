import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <h1> Hello Instagram! </h1>
      {/* Header */}

      <div className = "app__header">
          <img
            className = "app_headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />

      </div>

      <Post />

      {/* postos */}


    </div>
  );
}

export default App;
