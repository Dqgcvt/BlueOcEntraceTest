import PostsList from "./features/posts/PostsList"
import PostForm from "./features/posts/PostForm"

function App() {

  return (
    <div>

      <h1>Redux Posts App</h1>

      <PostForm />
      <PostsList />

    </div>
  )
}

export default App