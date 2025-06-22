import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './components/ui/sidebar'
import { AppLayout } from './components/layout/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { Lease } from './pages/Lease'
import { Documents } from './pages/Documents'
import { Maintenance } from './pages/Maintenance'
import { Messages } from './pages/Messages'
import { Settings } from './pages/Settings'
import { Landing } from './pages/Landing'

const TenantRoutes = () => (
  <SidebarProvider>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lease" element={<Lease />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppLayout>
  </SidebarProvider>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/locataire/*" element={<TenantRoutes />} />
      </Routes>
    </Router>
  )
}

export default App
