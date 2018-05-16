import React from 'react';
import {Link} from 'react-router';



const NavBar = (props) => {
    return (
      
        <div style={{width: '100%', margin:'0px 0px 0px 0px' }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
              <Link to='/' class="navbar-brand"  style={{color: '#FFF'}}>{props.logo}</Link>
              
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to='/open'  style={{color: '#CEC'}} data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"  class="nav-link">Atendimentos</Link>
            </li>
            <li class="nav-item">
              <Link to='/new'  style={{color: '#CEC'}} class="nav-link">Abrir Novo</Link>
            </li>
            <li class="nav-item">
              <Link to='/new'  style={{color: '#CEC'}} class="nav-link">Relatórios</Link>
            </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Por cliente  " aria-label="Por cliente" />
      <button class="btn btn-success my-2 my-sm-0" type="submit">Procurar</button>
    </form>
  </div>
</nav>
</div>
        
    );
};

export default NavBar;