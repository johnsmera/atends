import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';

export default class Open extends Component {

    state = {
        atendimentos: [],
        atendimento: {
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
        <td><button type="button" class="btn btn-primary btn-sm">Ver/Editar</button><span>|</span>
            <button type="button" class="btn btn-danger btn-sm">Excluir</button>
        </td>
     </tr>
      

    render() {

        const { atendimentos, atendimnto } = this.state;

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