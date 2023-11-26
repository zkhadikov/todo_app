import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {fetchAllPosts, deletePost} from '../../services/postService.js';

function PostsList() {
  const [state, setState] = useState({
    posts: [],
    loading: true,
    error: null,
  }); // [state, setState

  const loadPosts = async () => {
    try {
      const posts = await fetchAllPosts();
      setState({posts, loading: false, error: null});
    } catch (e) {
      setState({posts: [], loading: false, error: e});
    }
  };
  // fetch posts from Rails API
  useEffect(() => {
    loadPosts();
    console.log('i fire once');
  }, []);

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      const newPosts = state.posts.filter((post) => post.id !== id);
      setState({...state, posts: newPosts});
    } catch (error) {
      console.error('error deleting post:', error);
    }
  };

  return (
    <div>
      {state.posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link>
          </h2>
          <div className="post-links">
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            {' | '}
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
