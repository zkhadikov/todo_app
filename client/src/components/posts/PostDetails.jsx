import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {API_URL} from "../../constants.js";

function PostDetails() {
  const [post, setPost] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

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

  const deletePost = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate('/');
      } else {
        throw response;
      }
    } catch (error) {
      console.error("error deleting post:", error);
    }
  };

  return post === null ? <div>Loading ...</div> : (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      {" | "}
      <Link to={`/posts`}>Back to Posts</Link>
      {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default PostDetails;
