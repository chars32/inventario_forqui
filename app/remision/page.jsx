import React from "react";

function page() {
  return <div className="w-75 m-auto py-5">
    <h1 className="text-center">Remisión</h1>
    <form>
      <fieldset>
        <div class="form-group row">
          <label for="exampleSelect1" class="form-label mt-4">Cliente</label>
          <select class="form-select" id="exampleSelect1">
            <option>Chemiservis</option>
            <option>Halliburton México</option>
            <option>Pochteca</option>
            <option>Proveedora de Fluidos México</option>
          </select>
        </div>
      </fieldset>
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDefault">Orden de compra</label>
        <input type="text" class="form-control" placeholder="Default input" id="inputDefault" />
      </div>
      <div class="form-group row">
        <label class="form-label mt-4" for="readOnlyInput">Dirección de entrega</label>
        <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" value="Aquí va la dirección" />
      </div>
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDate">Fecha</label>
        <input type="date" class="form-control" id="inputDate" />
      </div>
      <fieldset>
        <div class="form-group row">
          <label for="exampleSelect1" class="form-label mt-4">Transporte</label>
          <select class="form-select" id="exampleSelect1">
            <option>Rodsua</option>
            <option>Gavsa</option>
            <option>Transcadi</option>
          </select>
        </div>
      </fieldset>
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDefault">Placa</label>
        <input type="text" class="form-control" placeholder="Aqui van las placas" id="inputDefault" />
      </div>
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDefault">No. de Unidad</label>
        <input type="text" class="form-control" placeholder="Aqui van las placas" id="inputDefault" />
      </div>
      {/* aqui son inputs que si tienen que ser ingresados por el usuario */}
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDefault">Cantidad</label>
        <input type="text" class="form-control" placeholder="Aqui va la cantidad" id="inputDefault" />
      </div>
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDefault">Unidad</label>
        <input type="text" class="form-control" placeholder="Aqui va la unidad" id="inputDefault" />
      </div>
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDefault">Descripcion</label>
        <input type="text" class="form-control" placeholder="Aqui va la descripción" id="inputDefault" />
      </div>
      <div class="form-group row">
        <label class="col-form-label mt-4" for="inputDefault">Observaciones</label>
        <input type="text" class="form-control" placeholder="Aqui van las observaciones" id="inputDefault" />
      </div>
      <fieldset>
        <div class="form-group row">
          <label for="exampleSelect1" class="form-label mt-4">Entrego</label>
          <select class="form-select" id="exampleSelect1">
            <option>Carlos Garcia</option>
            <option>Angel Cordoba</option>
            <option>Fabian Ruiz</option>
          </select>
        </div>
      </fieldset>
    </form>
  </div>;
}

export default page;
