import styled from 'styled-components';

export const SProductCard = styled.div<{ isExpanded: boolean }>`
    display: grid;
    grid-template-columns: 25% 55% 20%;
    grid-template-rows: ${({ isExpanded }) => (isExpanded ? 'auto auto' : '65% 35%')};
    width: 500px;
    height: ${({ isExpanded }) => (isExpanded ? 'max-content' : '180px')};
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px #aaa;
    overflow: hidden;
    margin: auto auto;
    transition: box-shadow 0.2s;
    :hover {
        box-shadow: 0 0 10px 4px #e09b0e;
    }
    text-align: center;
    margin: 15px;
    cursor: pointer;
    @media (max-width: 425px) {
        grid-template-columns: 30% 70%;
        grid-template-rows: ${({ isExpanded }) => (isExpanded ? 'auto auto auto' : '30% 50% 20%')};
        height: ${({ isExpanded }) => (isExpanded ? 'max-content' : '250px')};
    }
`;
export const SImage = styled.img`
    grid-row: 1 / span 2;
    grid-column: 1;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(0.8);
    @media (max-width: 425px) {
        grid-row: 1 / span 2;
        grid-column: 1;
    }
`;
export const SPrice = styled.span`
    grid-row: 1 / span 2;
    display: grid;
    align-content: center;
    width: 100%;
    height: 100%;
    background-color: #f6b42c;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    @media (max-width: 425px) {
        grid-row: 3;
        grid-column: 1 / span 2;
    }
`;
export const SCardTitle = styled.h3`
    > a {
        text-decoration: none;
        color: black;
        transition: color 0.2s;
        :hover {
            color: #f6b42c;
        }
    }
    grid-row: 1;
    grid-column: 2;
    margin: 0;
    align-self: center;
    font-size: 1.3rem;
    line-height: 1;
    padding: 5px;
    word-wrap: break-word;
    flex: 1;
    @media (max-width: 425px) {
        font-size: 1.05rem;
    }
    @media (max-width: 375px) {
        font-size: 1rem;
    }
`;

export const SCardDescription = styled.p`
    grid-row: 2;
    grid-column: 2;
    margin: 0;
    align-self: center;
    font-size: 0.9rem;
    line-height: 1.3;
    padding: 5px;
    word-wrap: break-word;
    @media (max-width: 375px) {
        font-size: 0.85rem;
    }
`;
export const SButtonShowHide = styled.button<{ isExpanded: boolean }>`
    font-weight: bold;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid ${({ isExpanded }) => (isExpanded ? '#c72020' : '#f6b42c')};
    cursor: pointer;
`;
export const SDeleteButtonContainer = styled.div`
    grid-row: 2;
    background-color: #f6b42c;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 425px) {
        grid-row: 1;
        grid-column: 1;
    }
`;
