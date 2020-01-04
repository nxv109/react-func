import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState(Array);
  const [loading, setLoading] = useState(false)
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
    	setLoading(true);
      await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'get'
        })
        .then(result => result.json())
        .then(result => setPosts(result));

      setLoading(false);
    };

    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  console.log('indexOfLastPost', indexOfLastPost);
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log('indexOfFirstPost', indexOfFirstPost);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePaginate = (number) => {
  	setCurrentPage(number);
  }; 

  return (
    <div className="container">
      <h1>My Posts</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} handlePaginate={handlePaginate} />
    </div>
  );
}

export default App;
