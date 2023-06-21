import { Dialog, DialogContent, DialogTitle, ModalProps, TextField } from '@mui/material'
import React, { FC, memo } from 'react'

type AddItemModalProps = {
	open:boolean;
	handleCloseModal:ModalProps['onClose'] 
}
const AddItemModal:FC<AddItemModalProps> = ({open, handleCloseModal}) => {

  return(
	<Dialog open={open} onClose={handleCloseModal}>
		<DialogTitle>Add new item</DialogTitle>
		<DialogContent>
		<TextField
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
		  <TextField
            margin="dense"
            id="description"
            label="Description"
            type="email"
            fullWidth
            variant="standard"
          />
		</DialogContent>
	</Dialog>
  )
}

export default memo(AddItemModal)