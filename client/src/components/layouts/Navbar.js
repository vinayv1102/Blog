import React from 'react';
import styled from 'styled-components'
import logo from '../../Logo.png'
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
    <NavbarContainer>
    <nav className="navbar navbar-expand-lg navbar-light px-5 py=0">
        <Link className="navbar-brand" to="#">
        <img style={{width:'100px'}} src={logo} alt='logo'/>
        </Link>
        <h3>Obessed Bloggers</h3>
    
    <button 
    className="navbar-toggler" 
    type="button" data-toggle="collapse" 
    data-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home<span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-article">Add Article</Link>
      </li>  
    </ul>
    </div>
    </nav>
    </NavbarContainer>
    )
}
export default Navbar;

//MAIN NAVBAR CONTAINER
const NavbarContainer= styled.div`
background: 	#50411e;
.nav-link{
  color:#fff !important;
  &:hover{
    background:  #3c2411;
  }
}
h3{
  transform:translate(-50%,50%);
  font-size:35px;
  color : #fff;
  font-weight:800;
  position: relative;
  bottom: 15px;
  left:12%;
}
.nav-link{
  font-size:20px;
  margin-left:20px;
}
img{
  border-radius:10px;
}
`;