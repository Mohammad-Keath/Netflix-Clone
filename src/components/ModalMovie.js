import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalMovie(props){
   
    return (
        <>
            <Modal show={props.handleshow} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.thisData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.thisData.poster_path} rounded width='100%' />
                    <p>{props.thisData.release_date}</p>
                    <p>{props.thisData.overview}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalMovie