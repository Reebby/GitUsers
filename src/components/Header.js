import React from 'react';

const Header = ({userInputChange,onSubmit, avatar_url}) => (
 <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
 <a className="navbar-brand" href="#">
       <img src="/img/logo.png" alt="Logo" style={{width: 30}}/>
     </a>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
    <span className="navbar-toggler-icon"></span>
  </button>
    <form className="form-inline my-2 my-lg-0">
      <input onChange={userInputChange} className="form-control mr-sm-2 bg-dark" style={{color: 'white'}} type="text" placeholder="Type in Username"/>
      <button onClick={onSubmit} className="btn btn-dark my-2 my-sm-0" type="button">Search</button>
    </form>

  <div className="collapse navbar-collapse" id="navb">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="javascript:void(0)">Pull request</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="javascript:void(0)">Issues</a>
      </li>
         <li className="nav-item">
        <a className="nav-link" href="javascript:void(0)">MarketPlace</a>
      </li>
         <li className="nav-item">
        <a className="nav-link" href="javascript:void(0)">Explore</a>
      </li>
    </ul>

      <a className="navbar-brand justify-content-end" href="#">
       <img src={avatar_url} alt="Logo" style={{width: 30}}/>
     </a>
  </div>
</nav>
 </div>
);

export default Header;