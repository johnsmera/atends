import React, { Component } from 'react';
import HomeCard from './../ui/HomeCard';
import { hashHistory } from 'react-router';

export default class Home extends Component {

    homeCardAberto = {
        title: 'Abertos',
        text: 'Total em aberto: 3',
        action: () => hashHistory.push('/open')
    }
    homeCardAndamento = {
        title: 'Andamento',
        text: 'Total em andamento: 2',
        action: () => hashHistory.push('/run')
    }
    homeCardFechado = {
        title: 'Fechados',
        text: 'Total fechado: 3',
        action: () => hashHistory.push('/closed')
    }

    render() {
        return (
            <div class="container text-center">
            <br/>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Ínicio</li>
                    </ol>
                </nav>
                <div class="row">
                    <HomeCard title={this.homeCardAberto.title} text={this.homeCardAberto.text} action={this.homeCardAberto.action} />
                    <HomeCard {...this.homeCardAndamento} />
                    <HomeCard {...this.homeCardFechado} />
                </div>
            </div>
        );

    }



}