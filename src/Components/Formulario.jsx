import {Card, Button, Form} from 'react-bootstrap';
import { useState } from 'react';

const Formulario = ({filtraNoticias}) => {
    const [busca, setBusca] = useState('');
    return (
        <div>
            <Card>
                <Card.Body>
                    <section className="mx-auto w-100 p-4">
                        <Form>
                            <Form.Group controlId="noticia" className="d-flex justify-content-between">
                                <Form.Control type="text" placeholder="Ingrese el nombre del articulo a buscar" 
                                value={busca} onChange={(e) => {setBusca(e.target.value)}}/>
                                <Button type="button" variant="primary" className="mt-2 mx-3" onClick={(e) => {
                                    filtraNoticias(busca)}}>Buscar</Button>
                            </Form.Group>
                        </Form>
                    </section>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Formulario;