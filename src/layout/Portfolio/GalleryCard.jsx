import { Col, Card, Container, Row } from "react-bootstrap";

export default function GalleryCard ( {portfolio: { id, title, content, website, cover}}) {

  return (
  //   <Container>
  //   <Row>
  //   <Col>
  //     <h2 className="text-center">Now Let me tell you <span>All about HOW</span></h2>
  //   </Col>
  // </Row>

    <Col key={id} className="button-effect">
      <Card>
        <figure className="figure-image">
          <a href={website} target="_blank" rel="noreferrer"><Card.Img
            src={cover} alt={title} className="rounded-0 img-fluid" /></a>
        </figure>
        
        <article className="card-body p-3">
          <header>
            <h2>{title}</h2>
            <p className="mt-0 pt-0 prior"><small>{content}</small></p>
          </header>
        </article>
      </Card>
    </Col>
    // </Container>
  )
}