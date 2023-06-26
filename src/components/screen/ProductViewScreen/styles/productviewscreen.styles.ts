import styled from "styled-components";

export const SProductViewContainer = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 50% 50%;
`
export const SImageView = styled.img`
	grid-row: 1 / span 2;
    grid-column: 1;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 100%;
    height: 100%;
    object-fit: contain;
`