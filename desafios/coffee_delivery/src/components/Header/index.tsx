import { Logo, HeaderContainer } from './style'
import logoImg from '../../assets/Logo.svg'
import { Cart } from '../Cart'
import { Location } from '../Location'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <Logo>
            <img src={logoImg} alt="Logo da cafeteria Coffee Delivery" />
          </Logo>
        </Link>
        <div>
          <Location />
          <Cart backgroudCart="yellow" fontColorCart="yellow" />
        </div>
      </nav>
    </HeaderContainer>
  )
}
