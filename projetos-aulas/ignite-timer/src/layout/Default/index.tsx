import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

export function Default() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
