// TODO al recibir inputSearchBar con algun valor, filtrar 
// la lista de dataAditivosFilter.
// En el componente SearchBar esta el codigo para filtrar
'use client'

import { useState } from 'react';

import { PencilSquare } from 'react-bootstrap-icons'

import ModalAditivos from "./ModalAditivos";

// Este componente dibuja la tabla de aditivos 
function TablaAditivos({ dataAditivosFilter }) {

  const [showModal, setShowModal] = useState(false)
  const [aditivoItem, setAditivoItem] = useState(null)


  const headerTitleInventario = [
    "NOMENCLATURA",
    "DESCRIPCION",
    "STOCK",
    "UNIDAD",
    "ACCIONES"]

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            {
              headerTitleInventario.map(title => (
                <th scope='col' key={title}>
                  {title}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            dataAditivosFilter.map(aditivo => (
              <tr
                className="table-primary text-center"
                key={aditivo.NOMENCLATURA}
              >
                <td>{aditivo.NOMENCLATURA}</td>
                <td>{aditivo.DESCRIPCION}</td>
                <td>{aditivo.STOCK}</td>
                <td>{aditivo.UNIDAD}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-success mx-1"
                    onClick={() => {
                      setAditivoItem(aditivo)
                      setShowModal(true)
                    }}
                  >
                    <PencilSquare />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        aditivoItem &&
        <ModalAditivos
          showModal={showModal}
          setShowModal={setShowModal}
          aditivoItem={aditivoItem}
          setAditivoItem={setAditivoItem}
        />
      }
    </>
  )
}

export default TablaAditivos;
