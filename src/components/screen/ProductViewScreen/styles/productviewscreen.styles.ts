import styled from "styled-components";

export const SProductViewContainer = styled.div`
	display: grid;
	grid-template-columns: 30% 50% 20%;
	grid-template-rows: 1fr 2fr 1fr;
	grid-area: 
	'image title title'
	'image descr descr'
	'. price delete'
	;
`