import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

export const Img = ({ className, src, alt, ...rest }) => (
  <LazyLoadImage className={className} alt={alt} src={src} {...rest} />
)
