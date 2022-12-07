import React from 'react';
import LineItem from "./LineItem";

const List = ({items}) => {
	return (
		<tbody>
		{items.map((item) => (
			<LineItem key={item.id} item={item}></LineItem>
		))}
		</tbody>
	);
};

export default List;
