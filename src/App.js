import './App.css';
import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import PostDetails from './pages/PostDetails'; // Updated import
import PostGallery from './pages/PostGallery'; // Updated import
import CreatePost from './pages/CreatePost'; // Updated import
import EditPost from './pages/EditPost'; // Updated import

const App = () => {

  // Sets up routes using useRoutes hook
  let element = useRoutes([
    {
      path: '/', // This will render the PostGallery component when at the home route
      element: <PostGallery />
    },
    {
      path: "/edit-post/:id", // This route is for editing a specific post
      element: <EditPost />
    },
    {
      path:"/create-post", // This route is for navigating to the form to create a new post
      element: <CreatePost />
    },
    {
      path: "/post-details/:id", // This route is for viewing details of a specific post
      element: <PostDetails />
    }
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to the Hub for Technology Enthusiasts!</h1> {/* Updated text */}
        <h2>Explore the Cutting Edge! Share and discuss the latest in tech.</h2> {/* Updated text */}
        <Link to="/"><button className="headerBtn">Explore Posts 🔍</button></Link> {/* Updated text */}
        <Link to="/create-post"><button className="headerBtn">Create Post 🏆</button></Link> {/* Updated text */}
      </div>
      {element}
    </div>
  );
}

export default App;
