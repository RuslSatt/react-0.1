import List from "./List";

const Content = ({items, handleCheck, handleDelete}) => {
	return (
		<>
			{items.length ? (
				<List
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}>
				</List>
			) : (
				<p style={{marginTop: '2px'}}>List is empty</p>
			)}
		</>
	);
};

export default Content;
