import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {fetchPost, deletePost} from "../../services/postService.js";

function PostDetails() {
  const [post, setPost] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  const loadPost = async () => {
    try {
      setPost(await fetchPost(id));
    } catch (error) {
      console.error("error fetching posts:", error);
    }
  };

  useEffect(() => {
    loadPost();
    console.log('i fire once');
  }, [id]);

  const handleDeletePost = async () => {
    try {
      await deletePost(id);
      navigate('/');
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
      <button onClick={handleDeletePost}>Delete</button>
    </div>
  );
}

export default PostDetails;
