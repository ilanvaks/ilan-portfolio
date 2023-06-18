import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap"

export default function About() {
  const[imageIndex, setImageIndex] = useState(0);

  const imageArray = [
    "profile-1.jpg",
    "ilan-cartoon.jpg"
  ];

  if (imageIndex >= imageArray.length) 
    setImageIndex(0);

  return (
    <div className="About-container">
    <Container id="about" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">Now Let me tell you <span>All about HOW</span></h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={8} md={6} lg={4} xl={3}>
          <Image src={`${process.env.PUBLIC_URL}/images/${imageArray[imageIndex]}`}
            alt="Jiho Sohn"            
            className="button-effect border-style mb-4"
            fluid
            style={{"cursor":"zoom-in"}}
            onClick={() => setImageIndex(imageIndex+1)} />
        </Col>

        <Col  lg={8}  className="text-white">
          <p>I'm orignally from Brooklyn, New York, my first 20 years were steeped in its vivacious energy. My passion wasn't the city's typical attractions but sneakers, a fascination that inspired my own business. This venture nudged me into the tech world as I leveraged automation to procure limited-edition pairs more swiftly than any competitor. It was through the blend of sneakers and technology that I found my true vocation.</p>
          <p>Currently, I am working as an intern for Boca Code, specializing in UX/UI design and MERN stack development. As part of my internship, I have been actively involved in building full-stack applications, utilizing my skills in front-end design and back-end development. Additionally, I have taken on the role of mentoring current Boca Code students, providing guidance and support as they navigate their own projects. One of my primary focuses has been polishing up my current project called LaceTalk. LaceTalk is a comprehensive full-stack application specifically designed for sneaker enthusiasts. It serves as a platform where users can effortlessly find detailed information about sneakers and engage with the community. Through this internship, I am honing my skills, expanding my knowledge, and gaining practical experience in the exciting field of UX/UI design and MERN stack development.</p>        
          <p>In the future, I aim to advance my career in technology and design. Building on my experiences as a UX/UI MERN stack intern at Boca Code, I am excited to tackle more challenging projects in a dynamic and innovative work environment. My passion lies in creating seamless and intuitive digital experiences, and I am particularly interested in bridging creativity with functionality. I aspire to develop applications and platforms that bring people together, fostering meaningful interactions and information exchange. My ultimate goal is to make a significant impact in the industry, continuously learning and pushing the boundaries of technology and design.</p>
        </Col>
      </Row>

      <Row>        
        <Col className="text-center">
          <a href="https://www.linkedin.com/in/jsohndata/"
          target="_blank"
          rel="noreferrer"
          className="button-effect">
          </a>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
