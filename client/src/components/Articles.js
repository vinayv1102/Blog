import React, {useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Articles = ({posts}) => {
    const [article,setArticle]= useState([])// deletion of article by id
    const deleteArticle=id =>{
        axios.delete(`/articles/${id}`)
            .then(res=>alert(res.data))
            setArticle(article.filter(elem=>elem._id !== id));
    }

    return ( 
        <MainContainer>
            {posts.map((article, key)=>(
                <div className="cont">
                <div className='container' key={key}>
                    <Link to={{
                        pathname: `/article/${article._id}`
                    }}>
                    <h2>{article.title}</h2>
                    </Link>
                <p>{article.article.substring(0,350)} ......</p>
                <span className='badge badge-secondary p-2'>{article.authorname}</span>
                <div className='row my-5'>
                    <div className='col-sm-2'>
                        <Link to={`/update/${article._id}`} className='btn btn-outline-success'>Edit article</Link>
                    </div>
                    <div className='col-sm-2'>
                        <button onClick={()=> deleteArticle(article._id)} to="/" className='btn btn-outline-danger'>Delete Article</button>
                    </div>
                </div>
                </div>
                </div>
            ))}
        </MainContainer>
    )
}

export default Articles

//MAIN CONTIANER
const MainContainer=styled.div`
margin-top:20px;

  .cont:nth-of-type(odd){
  background : #e1c19a;
  padding-top:20px;
  padding-bottom:5px;
  }
  .cont:nth-of-type(even){
    background : white;
    padding-top:20px;
    padding-bottom:5px;
  }
  h2{
      color:black;
      font-weight:600;
  }
  p{
      font-size:15px;
      
  }
  .p-2{
        font-size:14px;
        background-color:#50411e;
  }
`;