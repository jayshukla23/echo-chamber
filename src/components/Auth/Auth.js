/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './auth.style.scss';

import logo from '../../images/logo.svg';

function Auth({ history, currentHero, setHeroName }) {
  const [heroName, setStateHeroName] = useState("");

  useEffect(() => {    
    if(currentHero.name) {      
      if(currentHero.avatar.id) {
        goToMessageCenter();
      } else {
        goToAvatarSelection();
      }      
    }
  }, [currentHero]);

  const changeHeroName = e => {
    setStateHeroName(e.target.value);    
  }

  const goToAvatarSelection = () => {
    history.push('/avatar');
  }

  const goToMessageCenter = () => {    
    history.push('/message-center');
  }

  const login = () => {
    if(!heroName || !heroName.trim().length) {
      return;
    }    
    setHeroName(heroName);    
  }

  return (
    <div className="ecAuth__container">
      <div className="ecAuth__sidebar">
        <img className="ecAuth__logo" src={logo} alt="Echo Chamber" />
      </div>  
      <div className="ecAuth__content">
        <p>Start jotting down, the <span>super</span> way!</p>
        <br />
        <p>Select your hero name..</p>
        <input type="text" className="ecAuth__text-input" value={heroName} onChange={changeHeroName} />
        <div className="ecAuth__btn" onClick={login}>
          <p>I'm ready!</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentHero: state.hero
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHeroName: heroName => { dispatch({type: 'SET_HERO_NAME', heroName }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);