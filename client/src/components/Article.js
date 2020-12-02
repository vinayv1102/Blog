import React, {useState, useEffect} from 'react'
import styled from'styled-components'
import axios from'axios'
import {Link} from 'react-router-dom'

const Article = (props) => {
    const [title,setTitle]=useState('') //react hooks we use to take input
    const [article,setArticle]=useState('')
    const [authorname,setAuthorName]=useState('')

    useEffect(()=>{
        axios.get(`/articles/${props.match.params.id}`)
        .then(res=>{
            setTitle(res.data.title)
            setArticle(res.data.article)
            setAuthorName(res.data.authorname)
        })
        .catch(err=> console.log(err))
    }, [props])
    return (
        <MainContainer>
            <h2>{title}</h2>
            <p className='arts'>{article}</p>
            <p className='badge badge-secondary'>{authorname}</p>
            <br/>
            <Link to= "/" type="submit" className="btn btn-primary" > Return Home </Link>
        </MainContainer>
    );
};

export default Article

//MAIN CONTAINER

const MainContainer= styled.div`
 margin: 6rem auto;
 padding: 3rem 14rem;
 .arts{
    font-size:24px;
}
.badge-secondary{
    font-size:18px;
}
 h2{
     text-align:center;
     font-weight:900;
    font-size:45px;
    margin-bottom:30px;
    }
 }
 .btn-primary{
    margin-top:2rem;
    font-size:18px;
    background: #50411e;
    border:none;
    &:hover{
        background:#3c2411;
    }

`;