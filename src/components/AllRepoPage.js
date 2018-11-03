import React from "react";
import './AllRepoPage.css'
import {TinyPagination} from 'react-pagination-custom'

const AllRepoPage = ({repos,allrepo, num_per_repo_page, repo_page_num, btnPag}) => {
  let repository = Array.from(allrepo)
	return ( 
		<div>
			<ul>
			{
				repository.map((repo,i) => {
					return (
						<li key={i} class="col-12 d-block width-full py-4 border-bottom public source" itemprop="owns" itemscope="" itemtype="http://schema.org/Code">
							  <div class="d-inline-block mb-1">
							    <h3>
							      <a href="#" itemprop="name codeRepository">
							      {repo.name}</a>
							    </h3>


							  </div>

							  <div>
							      <p class="col-9 d-inline-block text-gray mb-2 pr-4" itemprop="description">
							        {repo.description}
							      </p>

							    <div class="col-3 float-right text-right">
							      

							  <span class="d-inline-block tooltipped tooltipped-s" aria-label="Past year of activity">
							    <svg width="155" height="30">
							      <defs>
							        <linearGradient id="gradient-146731237" x1="0" x2="0" y1="1" y2="0">
							            <stop offset="10%" stop-color="#c6e48b"></stop>
							            <stop offset="33%" stop-color="#7bc96f"></stop>
							            <stop offset="66%" stop-color="#239a3b"></stop>
							            <stop offset="90%" stop-color="#196127"></stop>
							        </linearGradient>
							        <mask id="sparkline-146731237" x="0" y="0" width="155" height="28">
							          <polyline transform="translate(0, 28) scale(1,-1)" points="0,1 3,1 6,1 9,1 12,1 15,1 18,1 21,1 24,1 27,1 30,1 33,1 36,1 39,1 42,1 45,1 48,1 51,1 54,1 57,1 60,1 63,1 66,1 69,1 72,1 75,1 78,1 81,1 84,1 87,1 90,1 93,1 96,1 99,1 102,1 105,1 108,1 111,1 114,1 117,1 120,1 123,1 126,2 129,1 132,1 135,1 138,1 141,1 144,1 147,1 150,1 153,1 " fill="transparent" stroke="#8cc665" stroke-width="2">
							        </polyline></mask>
							      </defs>

							      <g transform="translate(0, -12)">
							        <rect x="0" y="-2" width="155" height="30" style={{stroke: 'none', fill: 'url(#gradient-146731237)', mask: 'url(#sparkline-146731237)'}}></rect>
							      </g>
							    </svg>
							  </span>

							    </div>
							  </div>


							  <div class="f6 text-gray mt-2">

							      <span class="repo-language-color ml-0" style={{backgroundColor:'#f1e05a'}}></span>
							      <span class="mr-3" itemprop="programmingLanguage">
							        {repo.language}
							      </span>
							  </div>
		</li>
						)
				})
			}
			
			</ul>

			<div> 
      <TinyPagination

          total = {repos.length}
          selectedPageId = {parseInt(repo_page_num)}
          itemPerPage = {parseInt(num_per_repo_page)}
          renderBtnNumber = {btnPag}
          maxBtnNumbers = {2}
          preKey = 'PREVIOUS'
          nextKey = 'NEXT'
          wrapStyle = {{backgroundColor: '#ffffff'}}
          wrapClass = 'page-container'
          btnsClass = 'btns-container'
          counterClass = 'counter-container'
          counterStyle = {{color: 'gray'}}
          spreadClass = 'spread-container'
          spreadStyle = {{padding: '0 5px'}}
        />
    </div>
		</div>
		);
}
export default AllRepoPage;