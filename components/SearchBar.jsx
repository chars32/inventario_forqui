'use client'

import { useEffect, useState } from "react";

function SearchBar({ dataAditivosFilter }) {

    const [searchInput, setSearchInput] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        const filterData = () => {

            return dataAditivosFilter.filter(item => {
                const lowerCaseSearchInput = searchInput.toLowerCase()
                const lowercaseNomenclatura = item.NOMENCLATURA.toLowerCase()
                const lowercaseDescripcion = item.DESCRIPCION.toLowerCase()

                return lowercaseNomenclatura.includes(lowerCaseSearchInput) || lowercaseDescripcion.includes(lowerCaseSearchInput) && item
            }
            )
        }

        const results = filterData();
        setFilteredData(results)


    }, [dataAditivosFilter, searchInput])


    return (
        <div className="form-group">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Buscar aditivo" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleSearchInput} />
            </div>
        </div>
    )
}

export default SearchBar;
