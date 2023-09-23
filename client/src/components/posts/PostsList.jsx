import {useEffect, useState} from "react";
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
        setState({ posts: json, loading: false, error: null });
      } else {
        throw response;
      }
    } catch (error) {
      setState({ posts: [], loading: false, error: error });
      console.error("error fetching posts:", error);
    }
  }
  // fetch posts from Rails API
  useEffect(() => {
    loadPosts();
    console.log('i fire once');
  }, []);

  return (
    <div>
      {state.posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
