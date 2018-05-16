import React, {Component} from 'react';

export default class New extends Component {

  state = {
    atendimentos: [],
    atendimento: {
      cliente: '',
      solicitante: '',
      prioridade: '',
      situacao: '',
      responsavel: '',
      problema: '',
      solucao: '',
    }
  }


  

  componentDidMount() {
    this.getAtendimentos();
  }
  
  getAtendimentos = _ => {
    fetch('http://localhost:4000/atendimentos')
      .then(response => response.json())
      .then(response => this.setState({ atendimentos: response.data  }))
      .catch(err => {console.log(err)})
  }

  addAtendimento = _ => {
    const { atendimento } = this.state;
    fetch(`http://localhost:4000/atendimentos/add?cliente=${atendimento.cliente}&solicitante=${atendimento.solicitante}&prioridade=${atendimento.prioridade}&situacao=${atendimento.situacao}&responsavel=${atendimento.responsavel}&problema=${atendimento.problema}&solucao=${atendimento.solucao}`)
      .then(response => response.json())
      .then(this.getAtendimentos)
      .catch(err => console.error(err))
  }



  //renderAtendimento = ({ cliente, solicitante, prioridade, situacao, responsavel, problema, solucao  }) => <div key={id_atendimento}>{descproduto} {precoproduto}</div>

    render() {

      const { atendimentos, atendimento, situacao } = this.state;



        return (
            <div class="container">
                <br/>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Início</a></li>
    <li class="breadcrumb-item"><a href="#">Atendimento</a></li>
    <li class="breadcrumb-item active" aria-current="page">Novo</li>
  </ol>
</nav>
        <form>
  <div class="row">
  <div class="form-group col-sm-6">
    <label for="exampleFormControlInput1">Cliente</label>
    <input 
      type="text" 
      class="form-control" 
      id="exampleFormControlInput1"
      placeholder="Nome do posto" 
      value={atendimento.cliente} 
      onChange={ e => this.setState({ atendimento: {... atendimento, cliente: e.target.value} })}
    />

  </div>
  <div class="form-group col-sm-6">
    <label for="exampleFormControlInput1">Solicitante</label>
    <input 
    type="text" 
    class="form-control" 
    id="exampleFormControlInput1" 
    placeholder="Nome do solicitante" 
    value={atendimento.solicitante} 
    onChange={ e => this.setState({ atendimento: {... atendimento, solicitante: e.target.value} })}
    />
  </div>
  </div>
  <div class="row">
  <div class="form-group col-sm-6">
    <label for="exampleFormControlSelect1">Prioridade</label>
    <select 
    class="form-control" 
    id="exampleFormControlSelect1" 
    onChange={ e => this.setState({ atendimento: {... atendimento, prioridade: e.target.value} })}
    >
      <option>--</option>
      <option>Baixa</option>
      <option>Média</option>
      <option>Alta</option>
      <option>Em atraso</option>
    </select>
  </div>
  <div class="form-group col-sm-6">
    <label for="exampleFormControlSelect1">Situação</label>
    <select 
    class="form-control" 
    id="exampleFormControlSelect1" 
    >
      <option>--</option>
      <option>Aberto</option>
      <option>Andamento</option>
      <option>Fechado</option>
    </select>
  </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Selecione o responsável</label>
    <select 
    multiple class="form-control" 
    id="exampleFormControlSelect2"
    onChange={ e => this.setState({ atendimento: {... atendimento, responsavel: e.target.value} })}
    >
      <option>-</option>
      <option>George</option>
      <option>Vitor</option>
      <option>Wenderson</option>
      <option>Adriano</option>
      <option>John</option>
    </select>
  </div>
  <div class="row">
  <div class="form-group col-sm-6 my-1">
    <label for="exampleFormControlTextarea1">Problema</label>
    <textarea 
    class="form-control" 
    id="exampleFormControlTextarea1" 
    rows="2"
    value={atendimento.problema} 
    onChange={ e => this.setState({ atendimento: {... atendimento, problema: e.target.value} })}
    ></textarea>
  </div>
  <div class="form-group col-sm-6 my-1">
    <label for="exampleFormControlTextarea1">Solução</label>
    <textarea 
    class="form-control" 
    id="exampleFormControlTextarea1" 
    rows="2"
    value={atendimento.solucao} 
    onChange={ e => this.setState({ atendimento: {... atendimento, solucao: e.target.value} })}
    >
    </textarea>
  </div>
  </div>
  <br/>
  <button type="button" class="btn btn-success col-sm-12" onClick={this.addAtendimento}>Salvar</button>
</form>
            </div>
        );
    }

}