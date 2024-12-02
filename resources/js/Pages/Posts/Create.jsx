import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const Create = () => {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/posts');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
          />
          {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
        </div>
        <div>
          <label>Content:</label>
          <textarea
            rows="6"
            value={data.content}
            onChange={(e) => setData('content', e.target.value)}
          ></textarea>
          {errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}
        </div>
        <button type="submit" disabled={processing}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Create;
