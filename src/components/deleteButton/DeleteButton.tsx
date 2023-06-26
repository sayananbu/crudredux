import React, { FC, memo, MouseEventHandler } from 'react';
import SVGCross from '../Common/svgCross/SVGCross';
import { SDeleteButton } from './styles/deletebutton.styles';

type DeleteButtonProps = {
    handleDelete: MouseEventHandler<HTMLButtonElement>;
};
const DeleteButton: FC<DeleteButtonProps> = ({ handleDelete }) => {
    return (
        <SDeleteButton onClick={handleDelete}>
            <SVGCross />
        </SDeleteButton>
    );
};

export default memo(DeleteButton);
