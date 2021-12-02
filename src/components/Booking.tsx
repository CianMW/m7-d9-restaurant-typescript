import { Container, Col, Row } from "react-bootstrap"
import ReservationForm from "./ReservationForm"
import Reservations from "./Reservations"


const Booking = () => (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <Reservations />
        </Col>
      </Row>
      <Row className='justify-content-center mb-4'>
        <Col xs={12} md={6}>
          <ReservationForm />
        </Col>
      </Row>
    </Container>
  )
  
  export default Booking