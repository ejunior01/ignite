import { MapPin } from '@phosphor-icons/react'
import { LocationContainer } from './style'

export function Location() {
  return (
    <LocationContainer>
      <MapPin size={22} weight="fill" />
      <span>Porto Alegre, RS</span>
    </LocationContainer>
  )
}
