import {Button, Col,Container,Row,} from "react-bootstrap" 

const Intro = () => {
    return(
        <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center text-center'>
            <Row>
              <Col>
                <div className='title'>NONTON GRATIS</div>
                <div className='title'>GK PAKE KARCIS</div>
                <div className="introButton mt-4 text-center">
                    <Button variant="dark" href="#lihatsemualist">Lihat semua list</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro