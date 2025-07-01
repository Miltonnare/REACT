import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      setError('');
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts.');
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 py-10">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8">All Blog Posts</h2>
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        {loading ? (
          <p className="text-center text-pink-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map(post => (
              <li key={post._id} className="border-b border-pink-100 pb-4">
                <h3 className="text-xl font-bold text-pink-600 mb-2">{post.title}</h3>
                <p className="text-gray-700">{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home; 