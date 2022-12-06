import React from 'react';

const LineItem = ({item}) => {
	return (
		<li className="item">
			{JSON.stringify(item)}
		</li>
	);
};

export default LineItem;
