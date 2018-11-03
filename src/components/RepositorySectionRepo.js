import React from 'react';
import RepoPage from './RepoPage';
import AllRepoPage from './AllRepoPage';
import StarPage from './StarPage';

const RepositorySectionRepo = ({allrepo,num_per_repo_page, repo_page_num, allstar, num_per_star_page, star_page_num, repos, route, stars, btnPag, btnStarPag}) => {
let repository = Array.from(repos)
return (
	<div>
	{
		(route === 'home')
       ?<RepoPage repos={repos}/>
       :(route === 'repository')
         ?<AllRepoPage repos={repos}
          num_per_repo_page={num_per_repo_page}
           repo_page_num={repo_page_num}
           btnPag={btnPag}
           allrepo={allrepo}
            />
         :<StarPage
          stars={stars}
          btnStarPag={btnStarPag}
          num_per_star_page={num_per_star_page}
          star_page_num={star_page_num}
          allstar={allstar}
           />
	}		
  </div>
)
}
	export default RepositorySectionRepo;