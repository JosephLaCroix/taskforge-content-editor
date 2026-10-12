
import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState(
    localStorage.getItem('projectTitle') || ''
  )
  const [description, setDescription] = useState(
    localStorage.getItem('projectDescription') || ''
  )
  const [showPreview, setShowPreview] = useState(false)
  const [message, setMessage] = useState('')

  function saveProject() {
    localStorage.setItem('projectTitle', title)
    localStorage.setItem('projectDescription', description)
    setMessage('Project saved successfully!')
  }

  return (
    <div>
      <header className="lab-header">
  <div className="lab-logo">M</div>
  <div>
    <h1>MSMOMS Lab</h1>
    <p>Research Content Management System</p>
  </div>
</header>

<h2>Research Content Editor</h2>
<p>Edit research project information below.</p>

      <h3>Project Title</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          setMessage('')
        }}
        placeholder="Enter project title"
      />

      <h3>Project Description</h3>
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
          setMessage('')
        }}
        placeholder="Enter project description"
      />

      <br />

      <button onClick={saveProject}>Save Project</button>

      <button onClick={() => setShowPreview(!showPreview)}>
        {showPreview ? 'Hide Preview' : 'Preview'}
      </button>

      <p>{message}</p>

      {showPreview && (
        <div>
          <h2>Research Project Preview</h2>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

export default App
