import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {API_URL} from "../../constants.js";

function EditPostForm() {
  const [post, setPost] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchCurrentPost = async () => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`);
      if (response.ok) {
        const json = await response.json();
        setPost(json);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setPost(null);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const payload = {title: post.title, body: post.body};
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      } );
      if (response.ok) {
        const json = await response.json();
        navigate(`/posts/${json.id}`);
      } else {
        throw new Error("Something went wrong");
      }
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
