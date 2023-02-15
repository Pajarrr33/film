import { Card, Col, Container, Row ,Image} from 'react-bootstrap'
import SuzumeImage from "../assets/images/anime/Suzume\ no\ tojimari\ 2.jpg"

const Anime = () => {
    return(
    <div>
        <Container >
            <br></br>
            <h1 className='text-white'>ANIME MOVIES</h1>
            <br></br>
            <Row classname='spacing' >
                <Col md={4} className="movieWrapper" id='anime'>
                    <Card className="movieImage">
                        <Image src={SuzumeImage} alt="Suzume no tojimari " className='movieImage' />
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Suzume no tojimari</Card.Title>
                            <Card.Text className='text-left'>
                            Suzume no Tojimari adalah film petualangan fantasi animasi Jepang tahun 2022 yang diproduksi oleh CoMix Wave Films dan diedarkan oleh Toho. Film ini menggambarkan seorang gadis SMA dan seorang pemuda misterius yang mencoba mencegah terjadinya rentetan bencana di penjuru Jepang.
                            </Card.Text>
                            <Card.Text className='text-left'>Genre : Fantasy</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={SuzumeImage} alt="Suzume no tojimari " className='movieImage' />
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Suzume no tojimari</Card.Title>
                            <Card.Text className='text-left'>
                            Suzume no Tojimari adalah film petualangan fantasi animasi Jepang tahun 2022 yang diproduksi oleh CoMix Wave Films dan diedarkan oleh Toho. Film ini menggambarkan seorang gadis SMA dan seorang pemuda misterius yang mencoba mencegah terjadinya rentetan bencana di penjuru Jepang.
                            </Card.Text>
                            <Card.Text className='text-left'>Genre : Fantasy</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={SuzumeImage} alt="Suzume no tojimari " className='movieImage' />
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Suzume no tojimari</Card.Title>
                            <Card.Text className='text-left'>
                            Suzume no Tojimari adalah film petualangan fantasi animasi Jepang tahun 2022 yang diproduksi oleh CoMix Wave Films dan diedarkan oleh Toho. Film ini menggambarkan seorang gadis SMA dan seorang pemuda misterius yang mencoba mencegah terjadinya rentetan bencana di penjuru Jepang.
                            </Card.Text>
                            <Card.Text className='text-left'>Genre : Fantasy</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className='spacing'>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={SuzumeImage} alt="Suzume no tojimari " className='movieImage' />
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Suzume no tojimari</Card.Title>
                            <Card.Text className='text-left'>
                            Suzume no Tojimari adalah film petualangan fantasi animasi Jepang tahun 2022 yang diproduksi oleh CoMix Wave Films dan diedarkan oleh Toho. Film ini menggambarkan seorang gadis SMA dan seorang pemuda misterius yang mencoba mencegah terjadinya rentetan bencana di penjuru Jepang.
                            </Card.Text>
                            <Card.Text className='text-left'>Genre : Fantasy</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={SuzumeImage} alt="Suzume no tojimari " className='movieImage' />
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Suzume no tojimari</Card.Title>
                            <Card.Text className='text-left'>
                            Suzume no Tojimari adalah film petualangan fantasi animasi Jepang tahun 2022 yang diproduksi oleh CoMix Wave Films dan diedarkan oleh Toho. Film ini menggambarkan seorang gadis SMA dan seorang pemuda misterius yang mencoba mencegah terjadinya rentetan bencana di penjuru Jepang.
                            </Card.Text>
                            <Card.Text className='text-left'>Genre : Fantasy</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={SuzumeImage} alt="Suzume no tojimari " className='movieImage' />
                        <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>Suzume no tojimari</Card.Title>
                            <Card.Text className='text-left'>
                            Suzume no Tojimari adalah film petualangan fantasi animasi Jepang tahun 2022 yang diproduksi oleh CoMix Wave Films dan diedarkan oleh Toho. Film ini menggambarkan seorang gadis SMA dan seorang pemuda misterius yang mencoba mencegah terjadinya rentetan bencana di penjuru Jepang.
                            </Card.Text>
                            <Card.Text className='text-left'>Genre : Fantasy</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Anime