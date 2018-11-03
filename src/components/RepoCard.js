import React from 'react';

const RepoCard = ({repo}) =>

 (
  <div>
 <li className="pinned-repo-item p-3 mb-3  border border-gray-dark rounded-1 public source">

      <span className="pinned-repo-item-content">
        <span className="d-block">
          <a href="#" className="text-bold">
            <span className="repo js-repo" title="backgroundColorPicker">{repo.name}</span>
          </a>
        </span>


        <p className="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
         {repo.description}
        </p>

        <p className="mb-0 f6 text-gray">
            <span className="repo-language-color pinned-repo-meta" style={{backgroundColor: '#e34c26'}}></span>
            {repo.language}
        </p>
      </span>
    </li> 

  </div>

)
export default RepoCard;