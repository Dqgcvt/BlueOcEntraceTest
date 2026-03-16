import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "./postsSlice"

function PostForm() {

  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(addPost({
      id: Date.now(),
      title,
      body
    }))

    setTitle("")
    setBody("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add</h2>

      <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Title"
      />
        <br />  
      <textarea
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        placeholder="Body"
      />
        <br /> 
      <button>Add</button>
    </form>
  )
}

export default PostForm