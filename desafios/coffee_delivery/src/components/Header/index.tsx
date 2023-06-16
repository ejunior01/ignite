import { Logo, HeaderContainer } from './style'
import logoImg from '../../assets/Logo.svg'
import { Cart } from '../Cart'
import { Location } from '../Location'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Logo>
          <img src={logoImg} alt="Logo da cafeteria Coffee Delivery" />
        </Logo>
        <div>
          <Location />
          <Cart backgroudColor="yellow" fontColor="yellow" />
        </div>
      </nav>
    </HeaderContainer>
  )
}
