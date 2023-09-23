import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import PostsList from "./components/posts/PostsList";
import NavBar from "./components/navigation/NavBar";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>React on Rails ToDo App</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
