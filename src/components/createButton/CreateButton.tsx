import { FC, memo, MouseEventHandler } from 'react';
import { SButtonAddItem } from './styles/createbutton.styles';
import SVGCross from '../Common/svgCross/SVGCross';
type CreateButtonProps = {
    handleOpenModal: MouseEventHandler<HTMLDivElement>;
};
const CreateButton: FC<CreateButtonProps> = ({ handleOpenModal }) => {
    return (
        <SButtonAddItem onClick={handleOpenModal}>
            <SVGCross />
        </SButtonAddItem>
    );
};

export default memo(CreateButton);
