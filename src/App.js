import logo from './img/logo.png'
import './App.css';
import {React, useState} from 'react'

import home from './img/home.svg'
import message  from './img/message.svg'
import adicionar  from './img/adicionar.svg'
import coracao  from './img/coração.svg'
import safari  from './img/safari.svg'
import profileIcon from './img/profileIcon.jpg'
import user1 from './img/user/user1.png'
import post from './img/content/post1.jpg'
import baloon from './img/ballon.png'
import enviar from './img/enviar.svg'
import rosto from './img/rosto.png'

function App() {
  const [search, setSearch] = useState('Pesquisar')
  return (
    <div className="App">
      <nav className="header-page">
            <div>
              <img  src={logo} alt="instaLogo" />
            </div>
            <div className="search-div">
              <input className="search" onChange={(event)=>{setSearch(event.target.value)}} placeholder={search}></input>
            </div>
            <div className="icons-header">
              <a href='/'> <img src={home} alt="icons"/></a>
              <a href='/'> <img src={message} alt="icons"/></a>
              <a href='/'> <img src={adicionar} alt="icons"/></a>
              <a href='/'> <img src={safari} alt="icons"/></a>
              <a href='/'> <img src={coracao} alt="icons"/></a>
              <img alt="profile-icon" src={profileIcon} />
            </div>
      </nav>

      <div className="stories-part">
        <div className="user-stories">
          <img src={profileIcon} alt="userImage" />
        </div>
        <div className="user-stories">
          <img src={profileIcon} alt="userImage" />
        </div>
      </div>

      <div className="feed-part">
        <div className="user-post">

            <div className="profile-post">
              <img src={user1} alt="avatar-post"/>
              <a href="/">userDev</a>
            </div>

            <div className="content-post">
              <img src={post} alt="post" />  
            </div>

            <div className="interaction-post">
              <a href="/"><img src={coracao} alt="coracao" /></a>
              <a href="/"><img src={baloon} alt="balao mensagem" /></a>
              <a href="/"><img src={enviar} alt="enviar" /></a>
            </div>
            <div className="liked-post">
              <img src={user1} alt="Usuario" />
              <p>Curtido por </p><a href="/">Juliano Alfredo</a>
            </div>
            <div className="description-post">
              <a href="/">userDev</a>
              <p>Meus 2 carros lindos </p>
            </div>
            <div className="comment-post">
              <div>
                <img src={rosto} alt="rosto"/>
                <p>Adicione um comentário</p>
              </div>
              <div className="public-comment">
                <a href="/">Publicar</a>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
