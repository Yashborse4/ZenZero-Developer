import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import DeleteAccount from './pages/DeleteAccount'
import Contact from './pages/Contact'
import SchoolManagement from './pages/SchoolManagement'
import WheelDeal from './pages/WheelDeal'
import DailyWorker from './pages/DailyWorker'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school-management" element={<SchoolManagement />} />
          <Route path="/wheel-deal" element={<WheelDeal />} />
          <Route path="/daily-worker" element={<DailyWorker />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy/:appId?" element={<Privacy />} />
          <Route path="/terms/:appId?" element={<Terms />} />
          <Route path="/delete-account/:appId?" element={<DeleteAccount />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
