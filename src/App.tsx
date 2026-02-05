import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { Navbar } from './layouts/NavBar'
import Hero from './sections/Hero'

function App() {

  return (
    <MainLayout>
      <div>
          <Navbar />
          <Hero />
      </div>
    </MainLayout>
  )
}

export default App
