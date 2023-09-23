import './App.css'
import PostsList from "./components/posts/PostsList";

function App() {
  return (
    <>
      <div className="app">
        <h1>React on Rails ToDo App</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <PostsList />
      </div>
    </>
  )
}

export default App
