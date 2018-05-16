import React from 'react';

export default class Modal extends React.Component {
    render() {
        if (!this.props.showModal) {
            return null
        } else {
            return (
                <div class="alert alert-success" role="alert">
                     Atendimento incluído com sucesso.
                </div>
            
            )
        }

    }
}