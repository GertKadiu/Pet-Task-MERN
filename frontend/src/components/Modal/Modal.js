import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdClose } from 'react-icons/md';
import PetDetailCard from '../../Ui/PetDetailCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
export default function BasicModal({ open, handleClose, singleAnimal, handleDelete, type, id }) {
    
  const renderForm = () => {
    switch (type) {
      case 'dogs':
        return <PetDetailCard singleAnimal={singleAnimal} handleClose={handleClose._id} handleDelete={handleDelete} type={type} id={id} />;
      case 'cats':
        return <PetDetailCard singleAnimal={singleAnimal} handleDelete={handleDelete} type={type} id={id} />;
      case 'birds':
        return <PetDetailCard singleAnimal={singleAnimal} handleDelete={handleDelete} type={type} id={id} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <MdClose onClick={handleClose} style={{alignSelf:'flex-end', width:'32px', height:'32px'}}/>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {renderForm()}
        </Typography>
      </Box>
    </Modal>
  );
}
