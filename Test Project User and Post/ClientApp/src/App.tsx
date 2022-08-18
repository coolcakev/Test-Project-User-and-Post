import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import PostContainer from './components/postContainer/PostContainer'
import PostDetails from './components/postContainer/PostDetails'
import UserContainer from './components/userContainer/UserContainer'
import UserDetails from './components/userContainer/UserDetails'

const App = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes >
          <Route path="/user" element={<UserContainer />} />
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="/post" element={<PostContainer />} />
          <Route path="/post/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </>

  )
}

export default App