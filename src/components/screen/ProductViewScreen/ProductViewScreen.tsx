import React, { memo } from 'react'
import {  useParams } from 'react-router-dom'
import { SProductViewContainer } from './styles/productviewscreen.styles'

const ProductViewScreen = () => {
	const product = useParams()
	console.log(product)
  return (
	<SProductViewContainer>
		{'Product ID '+  product.productId}
	</SProductViewContainer>
  )
}

export default memo(ProductViewScreen)