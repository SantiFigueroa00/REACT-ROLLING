import React from "react";
import { Form, Button } from "react-bootstrap";
import { ListaTarea } from "./ListaTarea";

export const FormularioTarea = () => {
  return (
    <>
        <Form>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Ingrese una tarea" />
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form.Group>
        </Form>
        <ListaTarea></ListaTarea>
    </>
  );
};
