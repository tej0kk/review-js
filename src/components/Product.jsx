import { Row, Col, Card, Button } from "react-bootstrap";

const Product = ({ kategori, stateKeranjang }) => {

    const fungsiUntukTombol = () => {
        stateKeranjang="klik"
        // console.log(stateKeranjang);
    }

    return (
        <>
            <h3>Produk { kategori }</h3>
            <Row className="mb-5">
                <Col lg={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Macbook Pro</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button onClick={fungsiUntukTombol} variant="primary">Beli</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Legion 7i</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button onClick={fungsiUntukTombol} variant="primary">Beli</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Predator Pro</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button onClick={fungsiUntukTombol} variant="primary">Beli</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Lenovo IdeaPad 7</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button onClick={fungsiUntukTombol} variant="primary">Beli</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Product;