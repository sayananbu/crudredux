export function textInputParse(text:string){
	let trimmed = text.trim()
	return trimmed.length<1 ? trimmed : text
}