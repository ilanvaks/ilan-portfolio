import { Container,Row,Col } from "react-bootstrap"
import portfolioData from "../../data/portfolio.json"

export default function PortfolioPanel ({data: {tite, content, website, cover} }) {
  const [showModal, setShowModal] = useState(false)
  const toggleModalShow = () => setShowModal(!showModal)

  const imageUri = process.env.PUBLIC_URL + "/portfolio"

  return ( 
    <Col xs={11} md={6} lg={4} xl={3}>
      <Image src={image} />
    </Col>
  )
}