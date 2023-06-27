import styled from 'styled-components';
import { SCardDescription, SCardTitle, SDeleteButtonContainer, SPrice } from '../../../product/card/styles/card.styles';

export const SProductViewContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 40% 50% 10%;
    width: 80%;
    min-height: 80vh;
    margin: 0 auto;
    padding: 20px 0;
    place-items: center;
	@media (max-width:425px) {
		width: 95%;
		grid-template-columns: 100%;
    	grid-template-rows: auto auto auto 50px;
		row-gap: 10px;
		font-size: 13px;
	}
`;
export const SImageView = styled.img`
    grid-row: 1 / span 2;
    grid-column: 1;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 50%;
    height: 50%;
    object-fit: contain;
	@media (max-width:425px) {
		grid-row: 1;
    	grid-column: 1;
	}
`;

export const SFullDescription = styled(SCardDescription)`
    grid-row: 2;
    grid-column: 2;
    font-size: 1.5rem;
	@media (max-width:425px) {
		grid-row: 3;
    	grid-column: 1;
		font-size: 1.2rem;
	}
`;
export const SFullTitle = styled(SCardTitle)`
    grid-row: 1;
    grid-column: 2;
    font-size: 1.5rem;
	@media (max-width:425px) {
		grid-row: 2;
    	grid-column: 1;
	}
`;
export const SFooterContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
    grid-row: 3;
    grid-column: 1 / span 2;
    width: 100%;
    height: 100%;
	overflow:hidden;
	border-radius: 15px;
	@media (max-width:425px) {
		grid-row: 4;
    	grid-column: 1;
	}
`;

export const SFullPrice = styled(SPrice)`
    grid-column: 2;
	@media (max-width:425px) {
		grid-row: 1;
    	grid-column: 2;
	}
`;
export const SFullDeleteButtonContainer = styled(SDeleteButtonContainer)`
    grid-column: 1;
    grid-row: 1;
`;
export const SProductError = styled.pre`
    font-size: 1.5rem;
    grid-column: 1 / span 2;
`;
