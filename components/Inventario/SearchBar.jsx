function SearchBar({ setInputSearchBar }) {

  // Función que setea el searchInput
  const handleSearchInput = (e) => {
    setInputSearchBar(e.target.value)
  }

  return (
    <div className="form-group">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Buscar aditivo" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleSearchInput} />
      </div>
    </div>
  )
}

export default SearchBar;
