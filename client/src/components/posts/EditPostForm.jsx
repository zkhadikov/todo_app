import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {fetchPost, updatePost} from "../../services/postService.js";

function EditPostForm() {
  const [post, setPost] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchCurrentPost = async () => {
    try {
      setPost(await fetchPost(id));
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {title: post.title, body: post.body};
      await updatePost(id, payload);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCurrentPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-title">Title:</label>
          <input
            id="post-title"
            type="text"
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="post-body">Body:</label>
          <textarea
            id="post-body"
            value={post.body}
            onChange={(e) => setPost({...post, body: e.target.value})}
          />
        </div>
        <div>
          <button type="submitt">Update Post</button>
        </div>
      </form>
    </div>
  );
}

export default EditPostForm;
