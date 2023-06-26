import { Button, Dialog, DialogContent, DialogTitle, ModalProps, TextField } from '@mui/material';
import { ChangeEvent, FC, FormEvent, memo, MouseEventHandler, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { textInputParse } from '../../utils/textInputParse';
import CloseModalButton from '../closeModalButton/CloseModalButton';
import { SCloseModalButtonContainer, SModalForm } from './styles/additemmodal.styles';
import { addNewProductAction } from '../../store/product/product.slice';

type AddItemModalProps = {
    open: boolean;
    handleCloseModal: ModalProps['onClose'];
};
const AddItemModal: FC<AddItemModalProps> = ({ open, handleCloseModal }) => {
    const dispatch = useDispatch();
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const handleFormSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(
                addNewProductAction({
                    title: titleInput,
                    description: descriptionInput,
                    price: 100,
                    image: 'https://sc01.alicdn.com/kf/HTB1wWZTJFXXXXcUXVXXq6xXFXXXu/227818753/HTB1wWZTJFXXXXcUXVXXq6xXFXXXu.jpg',
                })
            );
            setTitleInput('');
            setDescriptionInput('');
            if (handleCloseModal) {
                handleCloseModal({} as Event, 'escapeKeyDown');
            }
        },
        [titleInput, descriptionInput]
    );
    return (
        <Dialog open={open} onClose={handleCloseModal}>
            <SCloseModalButtonContainer>
                <CloseModalButton handleCloseModal={handleCloseModal as MouseEventHandler<HTMLDivElement>} />
            </SCloseModalButtonContainer>
            <DialogTitle>Add new product</DialogTitle>
            <DialogContent>
                <SModalForm onSubmit={handleFormSubmit}>
                    <TextField
                        margin='dense'
                        id='title'
                        value={titleInput}
                        label='Title'
                        type='text'
                        fullWidth
                        required
                        variant='standard'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setTitleInput(textInputParse(e.target.value));
                        }}
                    />
                    <TextField
                        multiline
                        margin='dense'
                        id='description'
                        label='Description'
                        type='text'
                        required
                        value={descriptionInput}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setDescriptionInput(textInputParse(e.target.value));
                        }}
                        fullWidth
                        variant='standard'
                        rows={3}
                    />
                    <Button type='submit' variant='outlined' color='success'>
                        Create
                    </Button>
                </SModalForm>
            </DialogContent>
        </Dialog>
    );
};

export default memo(AddItemModal);
