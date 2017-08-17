import React from 'react';
import PropTypes from 'proptypes';
import {StyledTeam} from './match/homeTeam';
import {AwayTeam} from './match/awayTeam';
import {Title} from './title';
import {SubHeading} from './subHeading';

//this is our own module
//utilise the components we created - Heading and SubHeading
export const MatchInfo = ({ homeTeam, id, awayTeam, venue, competition}) => (
  <article className="fl w5 mr3 center bg-white br3 pr5 pa3 pa4-ns mv3 ba b--black-20 grow">
    <div class="stripeStyle" className="tc">
      <div className="ba b--solid bw0">
        <Title>{ competition }</Title>
        <StyledTeam>{ homeTeam }</StyledTeam>
        <h3>vs.</h3>
        <AwayTeam>{ awayTeam }</AwayTeam>
      </div>
      <br/>
      <SubHeading>Venue: { venue }</SubHeading>
    </div>
  </article>
);

//define the card properties
MatchInfo.propTypes = {
  homeTeam: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  awayTeam: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  competition: PropTypes.string.isRequired,
}