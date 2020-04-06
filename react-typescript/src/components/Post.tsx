import React, { useState, useEffect, useMemo, useRef } from 'react';
import PostItem from './PostItem';

type PostItemProps = {
  text?: string;
  author?: string; // ?: Một kỹ thuật có tên là "Optional chaining"
}

const postArr = [{
    id: 1,
    title: "Title 1",
    content: "This is content"
  },
  {
    id: 2,
    title: "Title 2",
    content: "This is content"
  },
  {
    id: 3,
    title: "Title 3",
    content: "This is content"
  }
];

export default function Post({ text, author }: PostItemProps) {
  // inputRef: React.RefObject<HTMLInputElement>;
  const [title, setTitle] = useState<any>(String);
  const [search, setSearch] = useState(String);
  const [posts, setPost] = useState<any[]>(postArr);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    setTitle("Loading title...")
  }, []);

  const handleChangeTitle = () => {
    setTitle("Learning Typescript");
  }

  const handleChangePost = () => {
    const aPost = {
      id: 4,
      title: "Title 4",
      content: "This is content"
    };

    setPost(postArr);
  }

  const handleSearch = () => {
    setSearch(inputRef.current.value);
  }

  const postList = useMemo(() => {
    return <PostItem posts={posts} />;
  }, [posts]);

  return (
    <div>
	    <h1>{ text }</h1>
	    <h2>Type of props</h2>
	    <div>Author: { author || "Anonymous" }</div>
	    <p>{ title }</p>
      <button onClick={ handleChangeTitle }>Change state</button>
      <div>---------------------------</div>
      { postList }
      <button onClick={ handleChangePost }>Add a post</button>
      <div>---------------------------</div>
      <h2>Form</h2>
      <p>{ search }</p>
      <input type="text" ref={ inputRef } onChange={ handleSearch } />
    </div>
  );
}
