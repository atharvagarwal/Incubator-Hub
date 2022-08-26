import React, { useState } from 'react';
import EmptyList from '../../Components/common/EmptyList';
import VideoList from '../../Components/videoSearch/VideoList';
import Header from '../../Components/videoSearch/headerVideo';
import SearchBar from '../../Components/Search/SearchBar';
import { Videolist } from '../../VideoConfig/data';

const Home = () => {
  const [blogs, setBlogs] = useState(Videolist);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = Videolist;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(Videolist);
    setSearchKey('');
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <VideoList blogs={blogs} />}
    </div>
  );
};

export default Home;
