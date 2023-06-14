import { Container, Row } from "react-bootstrap"
import portfolio from "../../data/portfolio.json"
import GalleryCard from "./GalleryCard.jsx"

export default function List () {

  console.log({portfolio})

  return (
    <Container fluid>
      <Row 
        xs={1} sm={2} lg={3} 
        className="g-4 justify-content-center">
          {portfolio.map( (element) => {
            return !element 
            ? (<p>Loading</p>)
            : (<GalleryCard portfolio={element} />)
          })}
      </Row>
    </Container>
  )
}