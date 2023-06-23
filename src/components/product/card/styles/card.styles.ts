import styled from 'styled-components';

export const SProductCard = styled.div<{isExpanded:boolean}>`
    display: grid;
    grid-template-columns: 25% 55% 20%;
    grid-template-rows: ${({isExpanded}) => isExpanded ? 'auto auto' : '50% 50%'};
    width: 500px;
    height: ${({isExpanded}) => isExpanded ? 'max-content' : '180px'};
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px #aaa;
    overflow: hidden;
    margin: auto auto;
    transition: box-shadow .2s;
    :hover {
        box-shadow: 0 0 10px 4px #e09b0e;
    }
	text-align: center;
	margin: 15px;
	cursor: pointer;
`;
export const SImage = styled.img`
    grid-row: 1 / span 2;
    grid-column: 1;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 100%;
    height: 100%;
	object-fit: contain;
	transform: scale(.8);
`;
export const SPrice = styled.span`
    grid-column: 3;
	display: grid;
	align-content: center;
    grid-row: 1 / span 2;
    width: 100%;
    height: 100%;
    background-color: #f6b42c;
	text-align: center;
	font-weight: 700;
	font-size: 1.5rem;
`;
export const SCardTitle = styled.h3`
	grid-row: 1;
	grid-column:2;
	margin: 0;
	align-self: center;
	font-size:1.2rem;
	line-height: 1;
	padding: 5px;
	word-wrap: break-word;
	flex:1;
`

export const SCardDescription = styled.p`
	grid-row: 2;
	grid-column:2;
	margin: 0;
	align-self: center;
	font-size:.9rem;
	line-height: 1.3;
	padding: 5px;
	word-wrap: break-word;
`
export const SButtonShowHide = styled.button<{isExpanded:boolean}>`
font-weight: bold;
background-color: transparent;
border-radius: 20px;
border: 1px solid ${({isExpanded})=>isExpanded ? '#c72020' : '#f6b42c' };
cursor:pointer;
`