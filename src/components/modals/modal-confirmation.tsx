import { Modal } from '@mui/material';
import StyledButtonComplete from '../material-styled/button-complete';
import StyledButtonDelete from '../material-styled/button-delete';
import './modal-confirmation.css'

const ModalConfirmation = (props:any) => {
    const {open, handleClose, acceptDelete} = props
    return(
        <Modal open={open} onClose={handleClose} className='modal-container'>
            <div className='modal-body'>
                <p>Seguro que desea eliminar esta tarea?</p>
                <StyledButtonDelete onClick={handleClose}>No</StyledButtonDelete>
                <hr></hr>
                <StyledButtonComplete onClick={acceptDelete}>Si</StyledButtonComplete>
            </div>
        </Modal>
    )
}

export default ModalConfirmation;