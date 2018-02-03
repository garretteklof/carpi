import React from 'react';

const DiemListItem = ({id, reading, writing, exercising, detracting }) => (
	<div>
		{ reading }
		{ writing }
		{ exercising }
		{ id }
	</div>
);

export default DiemListItem;