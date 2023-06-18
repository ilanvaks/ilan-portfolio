import { Container, Row, Col } from "react-bootstrap"


export default function ThreeThings() {

  return (
    <section>
<div id="threethings" className="whole-three">
    <Container className="All-cards my-4">
    <Row>
        <Col><h2 className="card-title text-center">Three Things</h2></Col>
      </Row>

      <Row>

        <Col>
        <div class="flip-card my-3">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img className="qf-img" src="/images/handshake.svg" alt="handshake" />

            <p class="title">Collaboritve</p>
            <p>Hover Over to Learn More!!</p>
            </div>
        <div class="flip-card-back">
            <h2 class="title">ALWAYS COLLABING</h2>
            
            <p>
            I excel as a collaborative software engineer, consistently demonstrating strong teamwork skills and effective communication in cross-functional projects. I actively listen and contribute valuable insights, fostering a positive and productive work environment. My willingness to share knowledge, support others, and adapt to varying project requirements makes me an invaluable asset to any collaborative software engineering team.
            </p>
        </div>
        </div>
  </div>
        </Col>

        <Col>
        <div class="flip-card my-3">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img className="qf-img" src="/images/nerd-face.svg" alt="nerd face" />
            <p class="title">Problem Solver</p>
            <p>Hover Over to Learn More!!</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Best Fishing Practices:</h2>
            <p>
            As a software engineer, I possess exceptional problem-solving skills. I excel at analyzing complex issues, breaking them down into manageable components, and devising efficient solutions. My ability to think critically, propose innovative approaches, and troubleshoot challenges showcases my expertise in effectively tackling diverse problems within the field of software engineering.
            </p>
        </div>
    </div>
</div>
        </Col>

        <Col><div class="flip-card my-3">
    <div class="flip-card-inner">
        <div class="flip-card-front">
        <img className="qf-img" src="/images/pantPallete.svg" alt="Paint Palette" />
            <p class="title">Attention To Detail</p>
            <p>Hover Over to Learn More!!</p>
        </div>
        <div class="flip-card-back">
            <p class="title">A Couple Fun Facts for you</p>
            <p>
            As a software engineer, I have a keen attention to detail that sets me apart. I meticulously review code, ensuring its accuracy and efficiency. From the smallest syntax error to the overall system architecture, I consistently strive for precision and maintain a high level of quality in my work. My meticulousness not only ensures robust and error-free software but also contributes to the overall user experience and satisfaction.
            </p>
        </div>
    </div>
</div>
        </Col>

      </Row>
    </Container>
  </div>
  </section>
  )
}