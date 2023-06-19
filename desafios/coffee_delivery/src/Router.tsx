import { Routes, Route } from 'react-router-dom'
import { Default } from './layout/Default'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<div>Olar</div>} />
      </Route>
    </Routes>
  )
}
