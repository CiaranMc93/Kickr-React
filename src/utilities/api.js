//sends a request and returns the response (in JSON format)
export function getMatches() {
	return fetch('http://localhost:8080/fixtures/laois')
		.then(response => response.json())
		.then(normaliseRobots);
}

function normaliseRobots(matches){
	return matches.map(match => ({
		id: match.id,
		homeTeam: match.homeTeam,
		awayTeam: match.awayTeam,
		venue: match.venue,
		competition: match.competition,
	}));
}