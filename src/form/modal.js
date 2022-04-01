import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Adicionar</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Novo Celular</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Código:</Form.Label>
              <Form.Control
                className="form-control"
                id="recipient-codigo"
                type="text"
                placeholder="XXXXXXXX"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Modelo:</Form.Label>
              <Form.Control
                className="form-control"
                id="recipient-modelo"
                type="text"
                placeholder="Insira o modelo do aparelho"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                className="form-control"
                id="recipient-preco"
                type="text"
                placeholder="ex: R$ 1.000,00"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                className="form-control"
                id="recipient-marca"
                type="text"
                placeholder="Insira a marca do aparelho"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cor</Form.Label>
              <Form.Control
                className="form-control"
                id="recipient-cor"
                type="text"
                placeholder="Black, White, Gold, Pink"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id="btnSalvar" onClick={handleClose}>
            SALVAR
          </Button>
          <Button variant="secondary" id="btnCancelar" onClick={handleClose}>
            CANCELAR
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;