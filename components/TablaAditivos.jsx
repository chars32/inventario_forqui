// Este componente dibja la tabla de aditivos y llena
// los campos con los datos que se le pasen por el parametro
function TablaAditivos({ dataAditivosFilter }) {
    const headerTitleInventario = [
        "NOMENCLATURA",
        "DESCRIPCION",
        "STOCK",
        "UNIDAD"]

    return (
        <table class="table table-hover">
            <thead>
                <tr>
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
                        <tr class="table-primary" key={aditivo.NOMENCLATURA}>
                            <td>{aditivo.NOMENCLATURA}</td>
                            <td>{aditivo.DESCRIPCION}</td>
                            <td>{aditivo.STOCK}</td>
                            <td>{aditivo.UNIDAD}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TablaAditivos;
