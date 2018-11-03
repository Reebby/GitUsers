import React from 'react';
import RepoCard from './RepoCard';

const RepoPage = ({repos}) => {
let repository = Array.from(repos)
return (
	<div>
		<div className="row">
			<div className="col-md-6">
				<h2 style={{fontWeight: 600, fontSize: '1pc', display: 'block', marginBottom: 8, marginTop: 20}}> Popular respository </h2>
			</div>
			
		</div>

    <div className="row">

    <ol className="pinned-repos-list mb-4"> 
    {
      (repos.length === 0)
    ?<div class="jumbotron">
        <h1>Oppsss! </h1> 
        <p>you have no repository yet</p> 
        </div>
      :repository.map((repo,i) => {
      	return <RepoCard key={i} repo={repo} />
      })
    }
    </ol>
    </div>
		
  </div>
)
}
	export default RepoPage;