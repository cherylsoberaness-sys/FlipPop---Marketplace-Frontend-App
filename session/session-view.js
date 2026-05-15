export const buildAuthenticatedSession = (username) => { 
    return `
        <button>Logout</button>
        <a href="create-post.html">Nuevo post</a>
        <span>${username}</span>
        
    `
}

export const buildUnathenticatedSession = () => {
    return `
      <a href="/signup.html">Signup</a>
      <a href="/login.html">login</a>
  `
}