import { Container, Row, Col } from "react-bootstrap";
import Panel from "./Panel";
import icon from "../../data/icon.json"


export default function Lisstt () {

  return (
    <Container id="skills">
      <h1 className="text-center">Skills</h1>
      <Row className="mt-3 justify-content-center">
        <Col md={7} className="text-cetner" >
          <h3 className="mb-4 text-center"> I take everywhere with me...</h3>
      {
        icon.map( (element) => {
          return (
            <Panel key={element.id}
             name={element.name}/>
          )
        })
      }
      </Col>
      </Row>
    </Container>
  )
}