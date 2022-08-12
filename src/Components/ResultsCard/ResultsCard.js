import './ResultsCard.css';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import FeedbackModal from '../FeedbackModal/FeedbackModal';


function ResultsCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='results-card'>
      <div className="button-container">
        <Button color='success' variant='outlined'>Descargar</Button>
        <Button onClick={handleOpen} color='error' variant='outlined'>Dejar comentario</Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FeedbackModal />
      </Modal>
    </div>
  )
}

export default ResultsCard
