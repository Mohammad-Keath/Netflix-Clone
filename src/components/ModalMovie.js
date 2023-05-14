import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function ModalMovie(props){

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.movie_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.movieData.image_path} rounded width='100%' />
                    <p>{props.movieData.top_text}</p>
                    <p>{props.movieData.tags}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleclose}>
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalMovie