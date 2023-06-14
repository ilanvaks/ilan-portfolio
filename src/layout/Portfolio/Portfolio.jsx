import {Container, Row, Col, Carousel, Image} from 'react-bootstrap';


export default function Portfolio() {
  return (
    
    <Carousel touch fade controls={false} className='all-carousel'>
      <Carousel.Item>
      <a href="https://lacetalk.net">
        <Image fluid
          className="mx-auto d-block"
          src="./images/lacetalk.png"
          alt="First slide"
          style={{ width: '70%' }} 
        />
        </a>
        <Carousel.Caption>
        </Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
