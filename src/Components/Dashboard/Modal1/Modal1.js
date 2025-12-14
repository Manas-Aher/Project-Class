import { Button, Modal } from 'react-bootstrap';

import modal from './Modal1.module.css';

const Modal1 = (props) =>{
    // eslint-disable-next-line no-lone-blocks
    return(
        <>
            <Modal
            {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className={modal.modal}
            >   
                <Modal.Header closeButton className={modal.modalHeader}>
                    <Modal.Title id="contained-modal-title-vcenter" className={modal.modalTitle}>
                        {props.product.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={modal.modalBody}>
                    <img alt='img' src={props.product.image} className={modal.imageWrapper}></img>
                    <p className={modal.modalDescription}>
                        {props.product.description}
                    </p>
                </Modal.Body>
                <Modal.Footer className={modal.modalFooter}>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modal1;