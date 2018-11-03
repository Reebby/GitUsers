import React from 'react';
import StarCard from './StarCard';
import {TinyPagination} from 'react-pagination-custom'

const StarPage = ({stars, star_page_num, num_per_star_page, allstar, btnStarPag}) => {
let allstars = Array.from(allstar)
return (
	<div>
		<div className="row">
			<div className="col-md-6">
				<h2 style={{fontWeight: 600, fontSize: '1pc', display: 'block', marginBottom: 8, marginTop: 20}}> Popular respository </h2>
			</div>
			
		</div>

    <div className="row">

    <ol className="pinned-repos-list mb-4"> 
    {(allstars.length === 0)
	  ?<div class="jumbotron">
	      <h1>Oppsss! </h1> 
	      <p>you have no starred repository</p> 
	      </div>
      :allstars.map((star,i) => {
      	return <StarCard key={i} star={star} />
      })
    }
    </ol>
    </div>

    <div> 
      <TinyPagination

          total = {stars.length}
          selectedPageId = {parseInt(star_page_num)}
          itemPerPage = {parseInt(num_per_star_page)}
          renderBtnNumber = {btnStarPag}
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
)
}
	export default StarPage;