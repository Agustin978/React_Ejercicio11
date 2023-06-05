import {Card, Button, Form} from 'react-bootstrap';

const Formulario = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <section className="mx-auto w-100 p-4">
                        <Form>
                            <Form.Group controlId="color" className="d-flex justify-content-between">
                                <Form.Select>
                                    <option>Buscar por categoria</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Button type="submit" variant="primary" className="mt-2 mx-3">Buscar</Button>
                            </Form.Group>
                        </Form>
                    </section>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Formulario;