import { Col, Container, Row, Carousel, Image } from "react-bootstrap";
import certData from "../../data/cert.json"; 


export default function Certs() {
    
    return (
        <section>
          <div className="">
            <Container>
                <Row>
                    <Col sm={12} className="p-0 ">
                        <Carousel fade>
                            {certData.map((cert, index) => (
                                <Carousel.Item key={cert.id}>
                                    <div className="carousel-image-container-boot d-flex justify-content-center align-items-center">
                                        <Image
                                            fluid
                                            src={cert.image} 
                                            className="cert  w-50"
                                            alt={`slide ${index + 1}`}
                                        />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    );
}
