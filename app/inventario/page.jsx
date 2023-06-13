import InventarioComponent from '@/components/InventarioComponent'
import { aditivos } from '@/data.json'

// Funcion finge obtener los datos de una api (data.json)
async function getInventaryData() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return aditivos
}


async function inventario() {
  // Guardamos la data de los aditivos
  const dataAditivos = await getInventaryData()

  // Filtrar solo los aditivos que tengan stock mayor a 0 
  const dataAditivosFilter = dataAditivos.filter(item => item.STOCK > 0)

  return (
    <div>
      <h1 className="text-center">Inventario Forquimia</h1>
      <div className="w-75 m-auto py-5">

        <InventarioComponent dataAditivos={dataAditivos} />

      </div>

    </div>
  );
}

export default inventario;
