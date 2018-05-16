import React from 'react';

const HomeCard = (props) => {
    return (
            <div class="col-12 col-sm-4" style={{marginTop: '10px'}}>
            
                <div class="card">
                    <img class="card-img-top rounded mx-auto d-block" style={{width: '40%', height: '30%'}} src="http://www.keepsoftware.com/site/imagens/iconSuporte.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.text}</p>
                            <button onClick={props.action} class="btn btn-primary">{props.title}</button>
                        </div>
                    </div>
                </div>
            
            );
        };
        
export default HomeCard;