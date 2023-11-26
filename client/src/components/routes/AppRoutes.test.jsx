import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes';

jest.mock('../posts/PostsList', () => {
  const MockPostsList = () => (
    <div data-testid="posts-list-id">Your Matcher for PostsListComponent</div>
  );
  return MockPostsList;
});

jest.mock('../posts/PostDetails', () => {
  const MockPostDetails  = () => (
    <div data-testid="post-details-id">Your Matcher for PostDetailsComponent</div>
  );
  return MockPostDetails;
});

jest.mock('../posts/NewPostForm', () => {
  const MockNewPostForm = () => (
    <div data-testid="new-post-form-id">Your Matcher for NewPostFormComponent</div>
  );
  return MockNewPostForm;
});

jest.mock('../../constants', () => ({ API_URL: 'http::/your-test-api-url' }));

describe('AppRoutes', () => {
  const renderWithRouter = (ui, { initialEntries = ["/"] } = {}) => {
    return render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      ),
    });
  };

  test('renders the posts list page', async () => {
    renderWithRouter(<AppRoutes />, {initialEntries: ['/']});

    const element = await screen.findByTestId('posts-list-id');
    expect(element).toBeInTheDocument();
  });

  test('renders the post details page', async () => {
    renderWithRouter(<AppRoutes />, { initialEntries: ['/posts/1']});

    const element = await screen.findByTestId('post-details-id');
    expect(element).toBeInTheDocument();
  });

  test('renders the new post form page', async () => {
    renderWithRouter(<AppRoutes />, { initialEntries: ['/posts/new']});

    const element = await screen.findByTestId('new-post-form-id');
    expect(element).toBeInTheDocument();
  });

});
