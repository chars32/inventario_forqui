function ModalAditivos({ showModal, setShowModal, aditivoItem, setAditivoItem }) {
  return (
    <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar {aditivoItem.NOMENCLATURA}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setShowModal(false), setAditivoItem(null) }}>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <p>Cantidad Actual</p>
            <p>{aditivoItem.STOCK}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Guardar</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setShowModal(false), setAditivoItem(null) }}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAditivos