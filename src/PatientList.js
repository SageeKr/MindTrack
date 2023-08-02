import React from 'react';
import Avatar from 'react-avatar';
import "./PatientList.css"
const PatientList = ({chooseThePatient}) => {

    return (
      <div>
        <h2>My patients</h2>
  <Avatar src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"
   name='Bob Mostmans' message={''} className='Avatar'  size={90} round="80px" onClick={() => chooseThePatient()} />
  <Avatar message={''} src=''className='Avatar'  size={90} round="80px" />
  <br/>
  <Avatar src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1687469935~exp=1687470535~hmac=f90932a15f351ff9920b6263ac9b24c6b00ba8036e992650df4ffeb269d436ff'  name='Bob Mostmans' message={''} className='Avatar'  size={90} round="80px" />
  <Avatar src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' name='Bob Mostmans' className='Avatar' message={''} size={90} round="80px" />
  <br/>
  <Avatar message={''} name='Bob Mostmans' className='Avatar'  size={90} round="80px" />
  <Avatar message={''} src='https://img.freepik.com/premium-vector/people-profile-graphic_24911-21374.jpg?w=740' name='Bob Mostmans' className='Avatar'  size={90} round="80px" />

      </div>
    );
}
export default PatientList;
