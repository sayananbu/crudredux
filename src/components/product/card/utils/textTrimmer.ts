
export default function textTrimmer(text:string, maxLength:number){
	if(maxLength<0 || text.length<=maxLength) return text
	return text.length<4 ? text.trim()  + '...' : text.slice(0,maxLength>3 ? maxLength-3 : maxLength).trim() + '...'
}