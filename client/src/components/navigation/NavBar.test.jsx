import NavBar from './NavBar';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

describe('NavBar', () => {
  const renderNavBar = () => {
    render(<NavBar />, { wrapper: MemoryRouter });
  };

  test('renders both links', async () => {
    renderNavBar();
    const postListLink = await screen.findByTestId('post-list-link');
    const newPostLink = await screen.findByTestId('new-post-link');
    expect(postListLink).toBeInTheDocument();
    expect(newPostLink).toBeInTheDocument();
  });
});
