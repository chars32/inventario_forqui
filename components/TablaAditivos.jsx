function TablaAditivos({ dataAditivosFilter }) {
    const headerTitleInventario = [
        "NOMENCLATURA",
        "DESCRIPCION",
        "STOCK",
        "UNIDAD"]

    // console.log(dataAditivosFilter)

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
