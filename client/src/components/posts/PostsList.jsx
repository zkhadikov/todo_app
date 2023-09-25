import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {API_URL} from "../../constants";

function PostsList() {
  const [state, setState] = useState({
    posts: [],
    loading: true,
    error: null,
  }); // [state, setState

  const loadPosts = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const json = await response.json();
        setState({posts: json, loading: false, error: null});
      } else {
        throw response;
      }
    } catch (error) {
      setState({posts: [], loading: false, error: error});
      console.error("error fetching posts:", error);
    }
  }
  // fetch posts from Rails API
  useEffect(() => {
    loadPosts();
    console.log('i fire once');
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const newPosts = state.posts.filter((post) => post.id !== id);
        setState({...state, posts: newPosts});
      } else {
        throw response;
      }
    } catch (error) {
      console.error("error deleting post:", error);
    }
  }

  return (
    <div>
      {state.posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`} className="post-title">{post.title}</Link>
          </h2>
          <div className="post-links">
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
