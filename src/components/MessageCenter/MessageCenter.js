/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ChatBoard from './ChatBoard/ChatBoard';

import './message-center.style.scss';

function MessageCenter({ currentHero, history, logOff }) {

  useEffect(() => {
    if(!currentHero || !currentHero.name) {
      goToAuthScreen();
    }
  }, [currentHero]);  

  const goToAuthScreen = () => {
    history.push('/');
  }  

  return (
    <div className="ecMsg__container">
    <div className="ecMsg__sidebar">
      <div className="ecMsg__userDetails">
        <div className="ecMsg__avatar">
          <img src={currentHero.avatar.image} alt="Avatar" />
        </div>        
        <p>{ currentHero.name}</p>        
      </div>      
      <div className="ecMsg__logout" onClick={logOff}>
        Sign off
      </div>
    </div>  
    <ChatBoard />    
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentHero: state.hero,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOff: () => { dispatch({type: 'LOG_OFF' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageCenter);