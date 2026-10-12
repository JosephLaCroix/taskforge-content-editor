
import { useState } from 'react'
import './App.css'

function App() {
  const [projects, setProjects] = useState(() => {
    return JSON.parse(localStorage.getItem('projects') || '[]')
  })

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [showPreview, setShowPreview] = useState(false)
  const [message, setMessage] = useState('')

  function saveProject() {
    if (!title.trim() || !description.trim()) {
      setMessage('Please enter a title and description.')
      return
    }

    let updatedProjects

    if (editingId !== null) {
      updatedProjects = projects.map((project) =>
        project.id === editingId
          ? { ...project, title, description }
          : project
      )
    } else {
      const newProject = {
        id: Date.now(),
        title,
        description
      }

      updatedProjects = [...projects, newProject]
    }

    setProjects(updatedProjects)
    localStorage.setItem('projects', JSON.stringify(updatedProjects))

    setTitle('')
    setDescription('')
    setEditingId(null)
    setShowPreview(false)
    setMessage('Project saved successfully!')
  }

  function editProject(project) {
    setTitle(project.title)
    setDescription(project.description)
    setEditingId(project.id)
    setShowPreview(false)
    setMessage('Editing: ' + project.title)
  }

  function newProject() {
    setTitle('')
    setDescription('')
    setEditingId(null)
    setShowPreview(false)
    setMessage('')
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
      <p>Create and edit research projects below.</p>

      <h3>Project Title</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter project title"
      />

      <h3>Project Description</h3>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter project description"
      />

      <button onClick={saveProject}>
        {editingId !== null ? 'Update Project' : 'Save Project'}
      </button>

      <button onClick={() => setShowPreview(!showPreview)}>
        {showPreview ? 'Hide Preview' : 'Preview'}
      </button>

      <button onClick={newProject}>New Project</button>

      <p>{message}</p>

      {showPreview && (
        <div className="preview">
          <h2>Research Project Preview</h2>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}

      <hr />

      <h2>Saved Research Projects</h2>

      {projects.length === 0 && <p>No projects saved yet.</p>}

      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button onClick={() => editProject(project)}>
            Edit Project
          </button>
        </div>
      ))}
    </div>
  )
}

export default App
