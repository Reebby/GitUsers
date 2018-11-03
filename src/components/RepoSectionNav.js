import React from 'react';

const RepoSectionNav = ({following, followers, stars, repos, homePage, repoPage, starsPage}) => (
<div>
<div className="UnderlineNav user-profile-nav js-sticky top-0" style={{position: 'static', top: 0, left: 410, width: 727}}>
      <nav className="UnderlineNav-body" data-pjax="" role="navigation">
        <a onClick={homePage} href="#" className="UnderlineNav-item selected" aria-selected="true" role="tab" title="Overview">
          Overview
        </a>
        <a onClick={repoPage} href="#" className="UnderlineNav-item " aria-selected="false" role="tab" title="Repositories">
           Repositories
           <span className="Counter">
             {repos}
           </span>
        </a>



        <a onClick={starsPage} href="#" className="UnderlineNav-item " aria-selected="false" role="tab" title="Stars">
          Stars
          <span className="Counter">
            {stars}
          </span>
        </a>
        <a href="#" className="UnderlineNav-item " aria-selected="false" role="tab" title="Followers">
          Followers
          <span className="Counter">
            {followers}
          </span>
        </a>
        <a href="#" className="UnderlineNav-item " aria-selected="false" role="tab" title="Following">
          Following
          <span className="Counter">
            {following}
          </span>
        </a>
      </nav>
    </div>
</div>
)

export default RepoSectionNav;