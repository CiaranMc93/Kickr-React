import React from 'react';
import PropTypes from 'proptypes';
import {MatchInfo} from './matchInfo';
import {MatchList} from './matchList';
import {SearchBar} from './search-bar';

//this is the html for the card container
//contains other components that we have built - search bar and cardlist
export const MatchContainer = ({matches, query, onSearch}) => (
	<div className="flex flex-column vh-100 sans-serif">
		<header className="pv4 bb tc">
			<h1 className="f2 b ttu tracked dark-blue">Laois Fixtures</h1>
			<SearchBar className="b--solid b--black-70"
				value={query} 
				onChange={(e) => onSearch(e.target.value)}>
			</SearchBar>
		</header>
		<MatchList>
			{renderMatches(matches)}
		</MatchList>
	</div>
	);

//variable used to render the robots using the card component we have created
const renderMatches = (matches) => {
	return matches.map(match => (
			<MatchInfo 
				key={match.id}
				id={match.id}
				homeTeam={match.homeTeam}
				awayTeam={match.awayTeam}
				venue={match.venue}
				competition={match.competition}
				/>
			));
};

//define the property types so that we know what the data is/should be
MatchContainer.PropTypes = {
	matches: PropTypes.array,
	query: PropTypes.string,
	onSearch: PropTypes.func,
}