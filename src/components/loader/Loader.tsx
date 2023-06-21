import { CircularProgress } from '@mui/material';
import React, { FC, memo } from 'react';
import { SLoaderContainer } from './styles/loader.styles';

type LoaderProps = {
	size:number
}
const Loader:FC<LoaderProps> = ({size}) => {
    return (
        <SLoaderContainer>
            <CircularProgress size={size} />
        </SLoaderContainer>
    );
};

export default memo(Loader);
