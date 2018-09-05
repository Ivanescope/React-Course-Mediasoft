import React, { Component } from 'react';
import './style.css';
import logo from '../../style/Logo.png';
import repository from '../../style/Repo.png';
import { Link } from 'react-router-dom';
import Form from '../Form';


class LeftSide extends Component {
  render() {
    return (
      <div className = 'container-left-side'>
        <div className = 'logo-container'>
        <h1 className = 'logo'>TasKing</h1>
          <img src = {logo} className = 'logo-img' alt = 'Logo'/>
        </div>
        <div className = 'form'>
          <Form />
        </div>
        <div className = 'footer'>
        <div>
         <span className = 'repository'>Сохраненные задачи</span>
        </div>
          <Link to = '/saveList'>
            <img src = {repository} className = 'repository-img' alt = 'repository'/>
          </Link>
        </div>
      </div>
      
    )
  }
}

export default LeftSide;