export const buildAuthenticatedSession = (username) => { 
    return `
        <button class="logout">Logout</button>
        <a class="new-post" href="create-post.html">Nuevo post</a>
        <span>${username}</span>
        
    `
}

export const buildUnathenticatedSession = () => {
    return `
      <a class="signup" href="/signup.html">Signup</a>
      <a class="login" href="/login.html">login</a>
  `
}