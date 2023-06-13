import SearchBar from "./SearchBar";
import TablaAditivos from "./TablaAditivos";

function InventarioComponent({ dataAditivos }) {
    // Filtrar solo los aditivos que tengan stock mayor a 0 
    const dataAditivosFilter = dataAditivos.filter(item => item.STOCK > 0)

    return (
        <>
            <SearchBar dataAditivosFilter={dataAditivosFilter} />
        </>
    )
}

export default InventarioComponent;