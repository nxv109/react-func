import React from 'react';

type postItemProps = {
	posts: any[];
};

export default function PostItem({ posts }: postItemProps) {
	console.log('Re-render')
  return (
    <div>
    	<h2>Example useMemo to prevent re-rendered</h2>
    	{posts.map((post) => (
    		<div key={post.id}>
    			<h1>{post.title}</h1>
    			<p>{post.content}</p>
    		</div>
    	))}
    </div>
  );
}
