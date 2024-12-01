import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post('/posts', { title, content, status: 'draft' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

export default Create;
