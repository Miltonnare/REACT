import React, { useState } from 'react';
import { createPost } from '../services/api';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await createPost({ title, content });
      setMessage('Post created successfully!');
      setTitle('');
      setContent('');
    } catch (err) {
      setMessage('Error creating post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 py-10">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8">Create New Post</h2>
      <form className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-semibold text-pink-600 mb-2">Title:</label>
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" required />
        </div>
        <div>
          <label className="block text-lg font-semibold text-pink-600 mb-2">Content:</label>
          <textarea name="content" value={content} onChange={e => setContent(e.target.value)} className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" required />
        </div>
        <button type="submit" disabled={loading} className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg shadow-md hover:from-yellow-500 hover:to-pink-500 transition disabled:opacity-50">{loading ? 'Submitting...' : 'Submit'}</button>
        {message && <p className="text-center mt-4 font-semibold text-pink-600">{message}</p>}
      </form>
    </div>
  );
}

export default CreatePost; 