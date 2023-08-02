import React from 'react';
import './PsychologistHome.css';
import profile from './Profile-Pic-1.png';
import graphOne from './graph1.jpg'
import graphTwo from './GraphB.jpg'
import Swiper from 'swiper';
import 'C:/Users/שגיא/MindTrack/node_modules/swiper/swiper.css'; // Update the import statement with the full path to the CSS file

const PsychologistHome =()=> {
    return (
      <div>
        <h2>Patient Information</h2>
        <div className="patient-card">
          <div className="patient-info">
            <div className="patient-photo">
              <img className="profile-patients" src={profile} alt="Profile" />
            </div>
            <div className="patient-details">
              <h3>Alice Choen</h3>
              <p>Age: 30</p>
            </div>
          </div>
          <div className="patient-details">
            <p>Diagnosis: Anxiety</p>
            <p>Bracelet Type: Watch 5 BT 40mm SM-R900</p>
          </div>
          <img className="grapthAd" src={graphOne}/>
          <img className="grapthAd" src={graphTwo}/>
        </div>        
      </div>
    );
}

export default PsychologistHome;
