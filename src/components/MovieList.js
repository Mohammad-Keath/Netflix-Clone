import FavList from './FavList';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function MovieList(props){
    const [show,setShow] = useState(false)
    const [clickedData,setClickedData] = useState({})
    const [favMovies,setFavMovies]=useState([])
    const handleadd = (item)=>{
        setShow(true);
        setClickedData(item)
        setFavMovies.push(item)
    }
    const handleclose =() =>{
        setShow(false)
    }
    return(
        <>
    <Row xs={1} md={4} className="g-4">
    {props.moviesData.map((item, idx) => (
        <Col key={idx}>
        <Card>
          <Card.Img variant="top" src={item.poster_path} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              <p>release date : {item.release_date}</p>
               <p>overview : {item.overview}</p>
            </Card.Text>
            <Button variant="primary" onClick={handleadd}>add to favorite</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <ModalMovie handleshow = {show} handleclose = {handleclose} thisData={clickedData}/>
  <FavList favMovies = {favMovies}/>
   </> ) 
}
export default MovieList