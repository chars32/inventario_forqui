import InventarioComponent from '@/components/Inventario/InventarioComponent'

function inventario() {
  return (
    <div>
      <h1 className="text-center">Inventario Forquimia</h1>
      <div className="w-75 m-auto py-5">
        <InventarioComponent />
      </div>

    </div>
  );
}

export default inventario;
