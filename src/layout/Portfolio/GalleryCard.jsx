import { Col, Card } from "react-bootstrap";

export default function GalleryCard ( {portfolio: { id, title, content, website, cover}}) {

  return (
    <Col key={id} className="button-effect">
      <Card>
        <figure className="figure-image">
          <a href={website} target="_blank" rel="noreferrer"><Card.Img 
            src={cover} alt={title} className="rounded-0" /></a>
        </figure>
        
        <article className="card-body p-3">
          <header>
            <h2>{title}</h2>
            <p className="mt-0 pt-0 prior"><small>{content}</small></p>
          </header>
        </article>
      </Card>
    </Col>
  )
}