import { FC, memo, useMemo } from 'react'
import { SCardTitle } from './styles/card.styles'

type TitleProps = {
	title:string,
	maxLength?:number
}
const Title:FC<TitleProps> = ({title ,maxLength=70}) => {
	const trimmedTitle = useMemo(()=>{
		if(maxLength<0 || title.length<=maxLength) return title
		return title.length<4 ? title + '...' : title.slice(0,maxLength-3) + '...'
	},[title,maxLength])
  return (
	<SCardTitle>{trimmedTitle}</SCardTitle>
  )
}

export default memo(Title)