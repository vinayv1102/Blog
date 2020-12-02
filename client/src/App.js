import React , {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import styled from 'styled-components'

function App() {
  const [posts, setPosts]=useState([]);
  useEffect(()=> {
    axios
    .get('/articles')
    .then(res=> setPosts(res.data))
    .catch(error=>console.log(error)); 
  });
  return (
    <Main className="App">
      <Header/>
      <Navbar/>
      <Route exact path="/" render={()=><Articles posts={posts}/>} />
      <Route exact path="/article/:id" render={props=><Article {...props} posts={posts}/>} />
      <Route exact path="/update/:id" render={props=><EditArticle {...props} posts={posts}/>} />
      <Route exact path="/add-article" component={AddArticle}/>
      <Footer/>
     </Main>
  );
}

export default App;

const Main = styled.div`
  background : #e1c19a;
`;