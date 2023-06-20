import { Container,Row,Col } from "react-bootstrap"

export default function ({data: {tite, content, website, cover} }) {
  const [showModal, setShowModal] = useState(false)
  const toggleModalShow = () => setShowModal(!showModal)

  const imageUri = process.env.PUBLIC_URL + "/port"

  return ( 
    <Container>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  )
}