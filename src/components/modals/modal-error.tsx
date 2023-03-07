import { Modal } from '@mui/material';
import StyledButtonComplete from '../material-styled/button-complete';
import './modal-confirmation.css'

const ModalError = (props:any) => {
    const {open, handleClose} = props
    return(
        <Modal open={open} onClose={handleClose} className='modal-container'>
            <div className='modal-body'>
                <p>La tarea que intenta crear ya existe</p>
                <p>Porfavor intente con un nuevo nombre</p>
                <StyledButtonComplete onClick={handleClose}>Okey</StyledButtonComplete>
            </div>
        </Modal>
    )
}

export default ModalError;