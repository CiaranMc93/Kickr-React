import React from 'react';

export const SearchBar = ({...props}) => (
	<input type="search" className="input-reset ba pa3"
	{...props}
	/>

	);