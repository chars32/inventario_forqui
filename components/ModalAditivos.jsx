import { useEffect, useState } from 'react'
function ModalAditivos({ showModal, setShowModal, aditivoItem, setAditivoItem }) {

  const [checkValue, setCheckValue] = useState(false)
  const [stock, setStock] = useState(aditivoItem.STOCK)
  const [inputValidation, setInputValidation] = useState(false)

  useEffect(() => {
    if (stock.length > 0 && !parseInt(stock)) {
      setInputValidation(true)
    } else {
      setInputValidation(false)
    }
  }, [stock, inputValidation])


  return (
    <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar {aditivoItem.NOMENCLATURA} ({aditivoItem.DESCRIPCION})</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setShowModal(false), setAditivoItem(null) }}>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label class="col-form-label" >Cantidad Existentes</label>
              {
                checkValue ?

                  <>
                    <input
                      type="text"
                      class={`form-control ${inputValidation ? 'is-invalid' : ''}`}
                      id="inputInvalid"
                      onChange={(e) => setStock(e.target.value)}
                    />
                    <div class="invalid-feedback">La cantidad debe ser un numero</div>
                  </>
                  :
                  <>
                    <input class="form-control" type="text" placeholder="Readonly input here..." readonly="" value={stock} disabled />
                  </>

              }
            </div>
            <div class="form-check mt-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => { setCheckValue(!checkValue) }} />
              <label class="form-check-label" for="flexCheckDefault">
                Actualizar
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" disabled={!checkValue}>Guardar</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setShowModal(false), setAditivoItem(null) }}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAditivos