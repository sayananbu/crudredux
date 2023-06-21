import React, { FC, memo, MouseEventHandler } from 'react';
import SVGCross from '../Common/svgCross/SVGCross';
import { SCloseModalButton } from './styles/closemodalbutton.styles';

type CloseModalButtonProps = {
    handleCloseModal: MouseEventHandler<HTMLDivElement>;
};
const CloseModalButton: FC<CloseModalButtonProps> = ({ handleCloseModal }) => {
    return (
        <SCloseModalButton onClick={handleCloseModal}>
            <SVGCross />
        </SCloseModalButton>
    );
};

export default memo(CloseModalButton);
