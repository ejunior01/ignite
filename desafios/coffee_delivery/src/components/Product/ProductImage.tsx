import { ImgHTMLAttributes } from 'react'
import { ImageContainer } from './style'

export function ProductImage({
  src,
  alt,
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <ImageContainer>
      <img src={src} alt={alt} />
    </ImageContainer>
  )
}
