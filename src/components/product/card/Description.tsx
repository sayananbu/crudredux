import React, { FC, memo, useMemo } from 'react'
import { SCardDescription } from './styles/card.styles'

type DescriptionProps = {
	description:string,
	maxLength?:number
}
const Description:FC<DescriptionProps> = ({description ,maxLength=135}) => {
	const trimmedDescription = useMemo(()=>{
		if(maxLength<0 || description.length<=maxLength) return description
		return description.length<4 ? description + '...' : description.slice(0,maxLength-3) + '...'
	},[description,maxLength])
  return (
	<SCardDescription>{trimmedDescription}</SCardDescription>
  )
}

export default memo(Description)