import React ,{useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios'

const EditArticle = (props) => {
    const [title,setTitle]=useState('') //react hooks we use to take input
    const [article,setArticle]=useState('')
    const [authorname,setAuthorName]=useState('')
    const [message, setMessage] = useState('')
const changeOnClick=e =>{
    e.preventDefault();
    const articles={
        title,
        article,
        authorname 
    }
    setTitle('')
    setArticle('')
    setAuthorName('')

    axios.put(`/articles/update/${props.match.params.id}`, articles) //sending the new values to the add article 
    .then(res=>setMessage(res.data))
    .catch(err=>console.log(err));
}


useEffect(()=>{
    axios.get(`/articles/${props.match.params.id}`)
    .then(res=>{
        setTitle(res.data.title)
        setArticle(res.data.article)
        setAuthorName(res.data.authorname)
    })
    .catch(err=> console.log(err))
}, [])

    return (
        <EditArticleContainer>
        <div className='container'>
            <h1>Update Article</h1>
            <span className="message">{message}</span>
            <form onSubmit={changeOnClick} encType='multipart/form-data'>
  <div className="form-group">
    <label htmlFor="authorname">Author Name</label>
    <input type="text" value={authorname} onChange={e =>setAuthorName(e.target.value)} className="form-control" placeholder="John Hancock" />
    <small id="emailHelp" className="form-text text-muted">Your privacy matters to us.</small>
  </div>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" value={title} onChange={e =>setTitle(e.target.value)} className="form-control" placeholder="Title" />
  </div>
  <div className="form-group">
    <label htmlFor="article">Article</label>
    <textarea value={article} onChange={e =>setArticle(e.target.value)} className="form-control" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Update Article</button>
</form>
</div>
        </EditArticleContainer>
    )
}

export default EditArticle

//MAIN CONTAINER
const EditArticleContainer= styled.div`
margin:3rem auto;
padding:4rem;
width:31.25rem;

h1{
    font-weight: 900;
    color: var(--dark-green)
}

.btn-primary{
    margin-top:2rem;
    background: var(--dark-green);
    border:none;
    &:hover{
        background:var(--light-green);
    }
}
.message{
    font-weight:900;
    colour:tomato:
    padding:1rem 1rem 1rem 0;
}
`;