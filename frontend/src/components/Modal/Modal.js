import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdClose } from 'react-icons/md';
import PetDetailCard from '../../Ui/PetDetailCard';
import { useMediaQuery } from "@mui/material";

export default function BasicModal({ open, handleClose, singleAnimal, handleDelete, type, id }) {
  const isMediumScreen = useMediaQuery('(max-width:837px)');
  const isSmallScreen = useMediaQuery('(max-width:540px)');

  const modalWidth = isSmallScreen ? 350 : isMediumScreen ? 500 : 800;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: modalWidth,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border:"none"
  };

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
        <MdClose onClick={handleClose} style={{alignSelf:'flex-end', width:'32px', height:'32px', cursor:"pointer"}}/>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {renderForm()}
        </Typography>
      </Box>
    </Modal>
  );
}
