import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { ItemTarea } from './ItemTarea'

export const ListaTarea = ({arregloTareas, borrarTarea}) => {
  return (
    <ListGroup>
        {
            arregloTareas.map((tarea,i)=> <ItemTarea key={i} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
        }
    </ListGroup>
  )
}
