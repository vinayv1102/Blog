import React from 'react'
import styled from 'styled-components';

const Header = () => {
    return (
        <div>
            <MainContainer>
            <h1>“Don’t focus on having a great blog. Focus on producing a blog that’s great for your readers.”</h1>
            </MainContainer>
        </div>
    );
};

export default Header


//MAIN CONTAINER
const MainContainer = styled.header`
 background:url(../../images/hotel-blog.png)no-repeat center/cover;
 height:30rem;

h1{
    transform:translate(-50%,50%);
    background-color: #e1c19a;
    font-size:30px;
    colour: #000;
    font-weight:800;
    position:absolute;
    text-align:center;
    top:1%;
    left:50%;
}
`;
