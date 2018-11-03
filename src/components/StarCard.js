import React from 'react';

const StarCard = ({star}) => {
return (
<div>

 <div class="col-12 d-block width-full py-4 border-bottom">
  <div class="d-inline-block mb-1">
    <h3>
      <a href="#">
        <span class="text-normal">{star.name}</span>
      </a>
    </h3>
  </div>

  <div class="float-right">
    

  </div>

  <div class="py-1">
      <p class="d-inline-block col-9 text-gray pr-4" itemprop="description">
        {star.description} 
      </p>
  </div>

  <div class="f6 text-gray mt-2">
        <span class="repo-language-color ml-0" style={{backgroundColor:'#f1e05a'}}></span>
      <span class="mr-3" itemprop="programmingLanguage">
        {star.language}
      </span>
    <a class="muted-link mr-3" href="#">
      <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
      {star.stargazers_count}
    </a>

      <a class="muted-link mr-3" href="#">
        <svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        {star.forks_count}
      </a>

     
  </div>
</div>

 </div>

)
}
export default StarCard;