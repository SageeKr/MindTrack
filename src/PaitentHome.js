import React from 'react';
import './PaitentHome.css';
import profile from './Profile-Pic-1.png';

const PaitentHome = ()=>
  {
    return (
      <div className="patient-cards">
          <div className="patient-info">
            </div>
            <div className="patient-photo">
              <img className="profile-patients" src={profile} alt="Profile" />
            </div>
            <div>
              <h3>Hey, Alice Choen</h3>
            </div> 
          <div>
            <div>
              <label>Feel Free To Share Your Emotional State:</label>
            <input type='text' placeholder='write here'></input>
            <input type='text'></input>
            <br></br>
            <button>submit</button>
            </div>
          </div>
      </div>
    );
  }

export default PaitentHome;
