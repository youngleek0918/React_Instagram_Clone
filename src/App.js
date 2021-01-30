import './App.css';
import Post from "./Post"
import React, { useState, useEffect } from "react";
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect => run a piece of code based on a specific condition
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code fires...
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, [])


  return (
    <div className="app">

      {/* Header */}
      <div className="app__header">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app__headerImage" />
      </div>
      <h1>Instagram</h1>

      {/* Posts */}
      {/* <Post username="Lee" caption="react.js" imageUrl="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ" />
      <Post username="Kim" caption="Sass" imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" />
      <Post username="Park" caption="CSS" imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" /> */}
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
