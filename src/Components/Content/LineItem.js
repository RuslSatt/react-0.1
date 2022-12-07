import React from 'react';

const LineItem = ({item}) => {
	return (
		<tr className="item">
			{Object.entries(item).map(([key, value]) => (
				<td key={key}>{JSON.stringify(value)}</td>
			))}
			{/*{JSON.stringify(item)}*/}
		</tr>
	);
};

export default LineItem;
