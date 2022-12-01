import React from 'react';
import LineItem from "./LineItem";

const List = ({items, handleCheck, handleDelete}) => {
	return (
		<ul>
			{items.map((item) => (
				<LineItem key={item.id}
						  item={item}
						  handleCheck={handleCheck}
						  handleDelete={handleDelete}>
				</LineItem>
			))}
		</ul>
	);
};

export default List;
