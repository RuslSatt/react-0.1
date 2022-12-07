import List from "./List";

const Table = ({items}) => {

	return (
		<table>
			{items.length ? (
				<List items={items}></List>
			) : (
				<td style={{marginTop: '2px'}}>List is empty</td>
			)}
		</table>
	);
};

export default Table;
