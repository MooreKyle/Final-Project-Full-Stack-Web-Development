import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import { supabase } from '../client';

const PostGallery = () => {
  const [posts, setPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);
  const [sortBy, setSortBy] = useState('created'); // Default sorting by created time
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select();

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // Function to sort posts by created time
    const sortByCreated = () => {
      const sorted = [...posts].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setSortedPosts(sorted);
    };

    // Function to sort posts by upvotes count
    const sortByUpvotes = () => {
      const sorted = [...posts].sort((a, b) => b.upvotes - a.upvotes);
      setSortedPosts(sorted);
    };

    // Call the appropriate sorting function based on the selected criteria
    if (sortBy === 'created') {
      sortByCreated();
    } else if (sortBy === 'upvotes') {
      sortByUpvotes();
    }
  }, [posts, sortBy]);

  // Function to handle sorting change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter posts based on search term
  const filteredPosts = sortedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="PostGallery">
      <div>
        Sort by: 
        <select value={sortBy} onChange={handleSortChange}>
          <option value="created">Created Time</option>
          <option value="upvotes">Upvotes Count</option>
        </select>
      </div>
      <div>
        Search by Title:
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredPosts.length === 0 ? (
        <p>No posts found. Try a different search term or create a new post!</p>
      ) : (
        filteredPosts.map((post) => (
          <PostCard 
            key={post.id}
            {...post}
          />
        ))
      )}
    </div>
  );
}

export default PostGallery;
