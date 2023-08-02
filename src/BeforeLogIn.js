import React from 'react';
import patientp from './patientp.jpg';
import thrapistp from './thrapistp.jpg';

const BeforeLogIn = ({ userTypeHandle }) => {
  return (
    <>
      <p>Please Choose Are You</p>
      <div className="ChoosingDiv">
        <div onClick={() => userTypeHandle('Paitent')}>
          <p style={{ textAlign: 'center', margin: 0 }}>Paitent</p>
          <img src={patientp} alt="logo" style={{ width: 110, height: 300, paddingRight: 16 }} />
        </div>
        <div onClick={() => userTypeHandle('Thrapist')}>
          <p style={{ textAlign: 'center', margin: 0 }}>Thrapist</p>
          <img src={thrapistp} alt="logo" style={{ width: 110, height: 300, paddingLeft: 16 }} />
        </div>
      </div>
    </>
  );
};

export default BeforeLogIn;
