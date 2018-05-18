import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';
import {Link} from 'react-router'
export default class Open extends Component {

    state = {
        atendimentos: [],
        oneAtendimento: [],
        atendimento: {
          id_atendimento: '',
          cliente: 'Cliente',
          solicitante: 'Solicitante',
          prioridade: 'Prioridade',
          situacao: 'Situacao',
          responsavel: 'Resp',
          problema: '1',
          solucao: '1'
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

      getAtendimento = (idAt) => {
        const { oneAtendimento } = this.state;
        fetch(`http://localhost:4000/atendimento/edit/${idAt}`)
          .then(response => response.json())
          .then(response => this.setState({ oneAtendimento: response.data  }))
          .then(console.log(this.state.oneAtendimento))
          .catch(err => {console.log(err)})
      }
    
      addAtendimento = _ => {
        const { atendimento } = this.state;
        fetch(`http://localhost:4000/atendimentos/add?cliente=${atendimento.cliente}&solicitante=${atendimento.solicitante}&prioridade=${atendimento.prioridade}&${atendimento.situacao}&${atendimento.responsavel}&${atendimento.problema}&${atendimento.solucao}`)
          .then(response => response.json())
          .then(this.getAtendimentos)
          .catch(err => console.error(err))
      }
   
      renderTr = ({id_atendimento, cliente, situacao}) => 
        <tr key={id_atendimento}>
        <th scope="row">{id_atendimento}</th>
        <td>{cliente}</td>
        <td>{situacao}</td>
        <td><Link to={`/edit/${id_atendimento}`} type="button"  
        onClick={() =>{ 
        
             this.getAtendimento(id_atendimento)}
        } 
        class="btn btn-primary btn-sm">Ver/Editar</Link>
            <Link to='/edit/:id' type="button" style={{marginLeft: '8px'}} class="btn btn-danger btn-sm">Excluir</Link>
        </td>
     </tr>
      
    render() {

        const { atendimentos, atendimento,oneAtendimento } = this.state;

        return (
            <div class="container text-center"><br/>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Início</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Atendimento</li>
                    </ol>
                </nav>
                <ReleaseForm submitHandler={this.handleSubmit} />
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Situação</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody>
                         {atendimentos.map(this.renderTr)}
                    </tbody>
                </table>
            </div>
        );
    }

}