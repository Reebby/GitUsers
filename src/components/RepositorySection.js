import React from 'react';
import './RepositorySection.css';
import RepoSectionNav from './RepoSectionNav';
import RepositorySectionRepo from './RepositorySectionRepo';
const RepositorySection = ({allrepo, num_per_repo_page, repo_page_num,allstar, num_per_star_page, star_page_num, followers, following, repos, stars, page, homePage, repoPage, starsPage, btnPag, btnStarPag}) => (
<div>
<RepoSectionNav
following={following}
followers={followers}
stars={stars.length}
repos={repos.length}
homePage={homePage}
repoPage={repoPage}
starsPage={starsPage}
/>

<RepositorySectionRepo
 repos={repos}
  route={page}
   stars={stars}
    btnPag={btnPag}
    btnStarPag={btnStarPag}
    allrepo={allrepo}
    num_per_repo_page={num_per_repo_page}
    repo_page_num={repo_page_num}
    allstar={allstar}
    num_per_star_page={num_per_star_page}
    star_page_num={star_page_num}
     />
    
</div>
  )
  export default RepositorySection;