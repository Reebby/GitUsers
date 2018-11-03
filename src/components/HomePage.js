import React, {Component} from 'react';
import axios from 'axios';
import ProfileSection from './ProfileSection';
import Header from './Header';
import RepositorySection from './RepositorySection';
import ReactLoading from 'react-loading';


class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			searchedUser: 'Reebby',
			result: '',
			repo: '',
			allrepo: '',
			userstars: '',
			route: 'home',
			repo_page_num: '1',
			num_per_repo_page: '4',
			allstar: '',
			star_page_num: '1',
			num_per_star_page: '2'
		}
	}
componentDidMount() {
	const user = this.state.searchedUser
	const num_per_repo_page = this.state.num_per_repo_page
	const repo_page_num = this.repo_page_num

	axios.get(`https://api.github.com/users/${user}`)
	.then(response => this.setState({result: response.data}));

    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => this.setState({repo: response.data}));

    axios.get(`https://api.github.com/users/${user}/starred`)
    .then(response => this.setState({userstars: response.data}))

}


userInputChange = (event) => {
	this.setState({searchedUser: event.target.value})
}

routeHome = () => {
	this.setState({route: 'home'})
}

routeRepository = () => {
	this.setState({route: 'repository'})
	this.changePage(this.state.repo_page_num)
}

routeStars = () => {
	this.setState({route: 'stars'})
	this.changeStarPage(this.state.star_page_num)
}

  
onSubmit = () => {
	const user = this.state.searchedUser
	const num_per_repo_page = this.state.num_per_repo_page
	const repo_page_num = this.repo_page_num

	const num_per_star_page = this.state.num_per_star_page
	const star_page_num = this.state.star_page_num

	axios.get(`https://api.github.com/users/${user}`)
	.then(response => this.setState({result: response.data}));

      axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => this.setState({repo: response.data}));

    axios.get(`https://api.github.com/users/${user}/starred`)
    .then(response => this.setState({userstars: response.data}))

    axios.get(`https://api.github.com/users/${user}/repos?per_page=${num_per_repo_page}&page=${repo_page_num}`)
    .then(response => this.setState({allrepo: response.data}))


    axios.get(`https://api.github.com/users/${user}/starred?per_page=${num_per_star_page}&page=${star_page_num}`)
    .then(response => this.setState({allstar: response.data}))

}

  buttonPageClick (id) {
    let selectedPageId = parseInt(this.state.repo_page_num);
    switch (id) {
      case 'PREVIOUS':
      return (
       this.setState({repo_page_num: selectedPageId - 1}),
       this.changePage(selectedPageId)
       )
        break;
      case 'NEXT':
       return (
       this.setState({repo_page_num: selectedPageId + 1}),
       this.changePage(selectedPageId)
       );
        break;
      default:
       return  id
        break;
    }
  }

  changePage = (new_repo_page_num) => {
  	const user = this.state.searchedUser
	const num_per_repo_page = this.state.num_per_repo_page
  	 axios.get(`https://api.github.com/users/${user}/repos?per_page=${num_per_repo_page}&page=${new_repo_page_num}`)
    .then(response => this.setState({allrepo: response.data}))
  }

 renderBtnNumber = (id) => {
    let selectedPageId = parseInt(this.state.repo_page_num) ;
    return(
      <button
       onClick = {this.buttonPageClick.bind(this, id)}
        key = {id}
        className = {`page ${selectedPageId === id? 'selected-page' : ''}`}
      >
        {id}
      </button>
    );
  }

   buttonStarPageClick (id) {
    let selectedStarPageId = parseInt(this.state.star_page_num);
    switch (id) {
      case 'PREVIOUS':
      return (
       this.setState({star_page_num: selectedStarPageId - 1}),
       this.changeStarPage(selectedStarPageId)
       )
        break;
      case 'NEXT':
       return (
       this.setState({star_page_num: selectedStarPageId + 1}),
       this.changeStarPage(selectedStarPageId)
       );
        break;
      default:
       return  id
        break;
    }
  }

  changeStarPage = (new_star_page_num) => {
  	const user = this.state.searchedUser
	const num_per_star_page = this.state.num_per_star_page
  	 axios.get(`https://api.github.com/users/${user}/starred?per_page=${num_per_star_page}&page=${new_star_page_num}`)
    .then(response => this.setState({allstar: response.data}))
  }

 renderStarBtnNumber = (id) => {
    let selectedStarPageId = parseInt(this.state.star_page_num) ;
    return(
      <button
       onClick = {this.buttonStarPageClick.bind(this, id)}
        key = {id}
        className = {`page ${selectedStarPageId === id? 'selected-page' : ''}`}
      >
        {id}
      </button>
    );
  }


	render() {
		const {avatar_url, name, login, bio, html_url, followers, following} = this.state.result;
		const repos = this.state.repo;
		const stars = this.state.userstars;
		const route = this.state.route;
		const allrepo = this.state.allrepo;
		const num_per_repo_page = this.state.num_per_repo_page;
		const repo_page_num = this.state.repo_page_num;
		const num_per_star_page = this.state.num_per_star_page
		const star_page_num = this.state.star_page_num
		const allstar = this.state.allstar
		return (
			<div>
				<Header
					userInputChange={this.userInputChange}
					onSubmit={this.onSubmit}
					avatar_url={avatar_url}
			    />
					<div className="container">
						 <div className="row">
							 <div className="col-md-4">
							 
							 	 <ProfileSection
								 avatar_url={avatar_url}
								 fullname={name}
								 username={login}
								 bio={bio}
								 html_url={html_url}
								 />
							 
								
							 </div>
							  <div className="col-md-8"> 
							  <RepositorySection
							   following={following}
							   followers={followers}
							   repos={repos}
							   stars={stars}
							   page={route}
							   homePage={this.routeHome}
							   repoPage={this.routeRepository}
							   starsPage={this.routeStars}
							   btnPag={this.renderBtnNumber}
							   btnStarPag={this.renderStarBtnNumber}
							   allrepo={allrepo}
							   num_per_repo_page={num_per_repo_page}
							   repo_page_num={repo_page_num}
							    allstar={allstar}
							   num_per_star_page={num_per_star_page}
							   star_page_num={star_page_num}
							   />
							 </div>
			               </div>
					</div>
			</div>
		)
	}
}

export default HomePage;