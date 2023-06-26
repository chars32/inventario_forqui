'use client'
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TablaAditivos from "./TablaAditivos";

import { aditivos } from '@/data.json'

function InventarioComponent() {
  const [inputSearchBar, setInputSearchBar] = useState()
  const [dataAditivos, setDataAditivos] = useState([])

  // Funcion finge obtener los datos de una api (data.json)
  const fetchDataAditives = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    setDataAditivos(aditivos)
  }

  // useEffect para obtener los datos de los aditivos y setearlos en el state
  useEffect(() => {
    fetchDataAditives()
  }, [])

  // Filtrar solo los aditivos que tengan stock mayor a 0 
  const dataAditivosFilter = dataAditivos.filter(item => item.STOCK > 0)

  return (
    <>
      <SearchBar setInputSearchBar={setInputSearchBar} />
      <TablaAditivos dataAditivosFilter={dataAditivosFilter} />
    </>
  )
}

export default InventarioComponent;
