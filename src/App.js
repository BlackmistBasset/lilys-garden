import '@fontsource/josefin-sans'
import { Navbar } from './components/Navbar'
import { Home } from './pages/home/Home'
import { Profile } from './pages/profile/Profile'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './utils/ProtectedRoute'
import { NotFound } from './pages/not-found/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
