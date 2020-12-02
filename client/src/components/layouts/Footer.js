import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <span style={{color: '#fff', top:"1.5rem",left:'1rem', position: 'relative'}}>
                &copy;{new Date().getFullYear()}All Rights Reserved Obsessed Bloggers.
            </span>
        </FooterContainer>
    )
}

export default Footer

//FOOTER CONTAINER
const FooterContainer=styled.footer`
 background:#50411e;
 height:4rem;
 left:0;
 bottom:0;
 width:100%;
`;