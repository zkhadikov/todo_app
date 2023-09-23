import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {API_URL} from "../../constants.js";

function PostDetails() {
  const [post, setPost] = useState(null);
  const {id} = useParams();

  const fetchPost = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (response.ok) {
        const json = await response.json();
        setPost(json);
      } else {
        throw response;
      }
    } catch (error) {
      setPost(null);
      console.error("error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPost();
    console.log('i fire once');
  }, [id]);

  return post === null ? <div>Loading ...</div> :(
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts`}>Back to Posts</Link>
    </div>
  );
}

export default PostDetails;
