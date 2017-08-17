import React from 'react';

//contains the children that we will pass in to be displayed
export const MatchList = ({children}) => (
	<div className="flex-auto flex flex-wrap overflow-scroll pa3 justify-center">
		{children}
	</div>
	);