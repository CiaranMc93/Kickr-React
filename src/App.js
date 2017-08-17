import React, { Component } from 'react';
import { MatchContainer } from './matchContainer';
import {connect} from 'react-redux';
import {searchAction, matchesFetchAction} from './index';

const mapStateToProps = (state) => {
	return {
		matches: state.matches,
		query: state.query,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearch: (query) => dispatch(searchAction(query)),
		onLoadData: () => dispatch(matchesFetchAction()),
	}
}

//gets the filtered set of robots based on the query sent in
const getFilteredMatches = (matches, query) => {
	//return the filtered robots object.
	return matches.filter(match => { 
		//return search by homeTeam or awayTeam or competition
		return match.homeTeam
				.toLowerCase()
				.includes(query.toLowerCase()) || 
			match.awayTeam
				.toLowerCase()
				.includes(query.toLowerCase()) || 
			match.competition
				.toLowerCase()
				.includes(query.toLowerCase());

	});
}

//creating a stateful component
//App is the top level component
class App extends Component {

	//when the container has mounted, call the load data
	componentDidMount()
	{
		this.props.onLoadData();
	}

	render() {
		const {matches, query, onSearch} = this.props;

		//return the container that we have defined
		//this contains our data, our components we have built for display (menu, card, item)
		return (
			<MatchContainer 
				matches={getFilteredMatches(matches,query)} 
				query={query} 
				onSearch={onSearch}
			/>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
