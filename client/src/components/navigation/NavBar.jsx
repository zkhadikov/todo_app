import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/" data-testid="post-list-link">Posts List</Link>
      {' | '}
      <Link to="/posts/new" data-testid="new-post-link">New Post</Link>
    </nav>
  );
}

export default NavBar;
