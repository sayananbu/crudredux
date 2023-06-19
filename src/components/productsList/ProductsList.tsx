import React, { FC, memo } from 'react'
import ProductCard from '../product/card/ProductCard'
import { ProductModel } from '../product/product.model'
import { SProductList } from './styles/productslist.styles'

type ProductListProps={
	products:ProductModel[]
}
const ProductList:FC<ProductListProps> = ({products}) => {
  return (
	<SProductList>
		{products.map(val=> <ProductCard key={val.id} {...val}/> )}
	</SProductList>
  )
}

export default memo(ProductList)