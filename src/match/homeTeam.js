import React from 'react';
import styled from 'styled-components';

export const HomeTeam = ({children}) => (
    <h3 className="f4 mb2">
		{ children }
    </h3>
);

export const StyledTeam = styled(HomeTeam)`
	color: blue;
	font-weight: bold;
`;

