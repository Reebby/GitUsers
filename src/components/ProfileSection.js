import React from 'react';

const ProfileSection = ({avatar_url, fullname, username, bio, html_url}) => (
<div>
 <div className="card" style={{width: 250, marginTop: 20}}>
  <img className="card-img-top" src={avatar_url} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">{fullname}</h4>
    <p className="card-text">{username}</p>
    <p className="card-text">{bio}</p>
    <a href={html_url} className="btn btn-primary">View Full Profile</a>
  </div>
</div>
</div>

  )
  export default ProfileSection;