import React from 'react';


const ReleaseForm = ({ submitHandler }) => {
  let _releaseName, _releaseDate;
  const handleSubmit = (e) => {
    submitHandler(e, {
      name: _releaseName.value,
      date: _releaseDate.value
    }
    )
  }



  return (
    <div style={{ paddingTop: '10px'}}>
      <form onSubmit={handleSubmit}>
        <div class="form-row align-items-center">
          <div class="col-sm-5 my-1">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Por data" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Pesquisar</button>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filtrar
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Aberto</a>
              <a class="dropdown-item" href="#">Andamento</a>
              <a class="dropdown-item" href="#">Fechado</a>
              <a class="dropdown-item" href="#">Por Data</a>
              <a class="dropdown-item" href="#">Por Cliente</a>
              <a class="dropdown-item" href="#">Por Responsável</a>
              <a class="dropdown-item" href="#">Por Prioridade</a>
            </div>
          </div>

          <div class="col-auto my-1">
            <button type="submit" class="btn btn-primary">Novo Atendimento</button>
          </div>
        </div>
      </form>
    </div>


  );
}

export default ReleaseForm;