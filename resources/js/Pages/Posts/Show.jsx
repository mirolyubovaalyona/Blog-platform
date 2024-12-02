import React from 'react';
import { InertiaLink } from '@inertiajs/react';

const Show = ({ post }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <InertiaLink href="/posts">
        <button>Back to Posts</button>
      </InertiaLink>
    </div>
  );
};

export default Show;
