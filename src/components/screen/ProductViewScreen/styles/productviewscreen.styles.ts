import styled from 'styled-components';
import { SCardDescription, SCardTitle, SDeleteButtonContainer, SPrice } from '../../../product/card/styles/card.styles';

export const SProductViewContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 40% 50% 10%;
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    padding: 20px 0;
    place-items: center;
`;
export const SImageView = styled.img`
    grid-row: 1 / span 2;
    grid-column: 1;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 70%;
    height: 70%;
    object-fit: contain;
`;

export const SFullDescription = styled(SCardDescription)`
    grid-row: 2;
    grid-column: 2;
    font-size: 1.5rem;
`;
export const SFullTitle = styled(SCardTitle)`
    grid-row: 1;
    grid-column: 2;
    font-size: 1.5rem;
`;
export const SFooterContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
    grid-row: 3;
    grid-column: 1 / span 2;
    width: 100%;
    height: 100%;
`;

export const SFullPrice = styled(SPrice)`
    grid-column: 2;
`;
export const SFullDeleteButtonContainer = styled(SDeleteButtonContainer)`
    grid-column: 1;
    grid-row: 1;
    border-radius: 15px 0 0 0;
`;
export const SProductError = styled.pre`
    font-size: 1.5rem;
    grid-column: 1 / span 2;
`;
