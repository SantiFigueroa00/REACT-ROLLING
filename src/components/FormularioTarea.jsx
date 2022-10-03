import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ListaTarea } from "./ListaTarea";

export const FormularioTarea = () => {

  const tareasLS = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState(tareasLS);

  useEffect(()=>{
    console.log('Montaje')
    localStorage.setItem('listaTareas', JSON.stringify(arregloTareas));
  },[arregloTareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTareas, tarea]);
    setTarea('');
  };

  const borrarTarea = (nombre) => { 
        let newArreglo = arregloTareas.filter((item) => item !== nombre );
        setArregloTareas(newArreglo);
    }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTarea>
    </>
  );
};
