import { Col, Container, Row, Card, Button } from "react-bootstrap";

const ContenedorNoticias = ({noticias}) => {
    return (
        <div>
            <Container className="my-5">
                <Row className="justify-content-center">
                    {noticias.map((noticia, indice) => {
                        return (
                        <Col key={indice} lg={3} md={6} xs={12}>
                            <Card className="m-1">
                                <Card.Img className="card-img-custom" variant="top" src={noticia.urlToImage}></Card.Img>
                                <Card.Body>
                                    <Card.Title className="card-text card-title-custom">{noticia.title}</Card.Title>
                                </Card.Body>
                                <Button href={noticia.url} variant="primary" className="my-2 m-auto">Mas informacion</Button>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default ContenedorNoticias;