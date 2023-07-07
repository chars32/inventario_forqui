'use client'
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TablaAditivos from "./TablaAditivos";

import { aditivos } from '@/data.json'

function InventarioComponent() {
  const [inputSearchBar, setInputSearchBar] = useState()
  const [dataAditivos, setDataAditivos] = useState([])

  // Filtrar solo los aditivos que tengan stock mayor a 0 
  const dataAditivosFilter = dataAditivos.filter(item => item.STOCK > 0)

  // Funcion finge obtener los datos de una api (data.json)
  const fetchDataAditives = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    setDataAditivos(aditivos)
  }

  // useEffect para obtener los datos de los aditivos y setearlos en el state
  useEffect(() => {
    fetchDataAditives()
  }, [])

  // useEffect para filrar los aditivos segun cambie el input 
  // de inicio muestra la lista completa ya que al no haber datos 
  // en el input no tiene nada que comparar.
  useEffect(() => {
    if (inputSearchBar) {
      const lowerCaseSearchInput = inputSearchBar.toLowerCase()

      const filteredData = dataAditivosFilter.filter(item => {
        const lowercaseNomenclatura = item.NOMENCLATURA.toLowerCase()
        const lowercaseDescripcion = item.DESCRIPCION.toLowerCase()

        return lowercaseNomenclatura.includes(lowerCaseSearchInput) || lowercaseDescripcion.includes(lowerCaseSearchInput) && item
      })
      setDataAditivos(filteredData)
    } else {
      setDataAditivos(aditivos)
    }

  }, [inputSearchBar, dataAditivosFilter])



  return (
    <>
      <SearchBar setInputSearchBar={setInputSearchBar} />
      <TablaAditivos dataAditivosFilter={dataAditivosFilter} />
    </>
  )
}

export default InventarioComponent;
