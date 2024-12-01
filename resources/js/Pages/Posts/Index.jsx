import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <InertiaLink href="/posts/create">Create New Post</InertiaLink>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <InertiaLink href={`/posts/${post.id}/edit`}>{post.title}</InertiaLink>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
