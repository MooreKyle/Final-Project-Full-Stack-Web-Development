import React, { useState } from 'react';

const PostSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const { value } = e.target;
    setQuery(value);
    onSearch(value); // Trigger the search process
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default PostSearch;
