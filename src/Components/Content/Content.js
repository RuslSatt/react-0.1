import List from "./List";

const Content = ({items, handleCheck, handleDelete}) => {
	return (
		<main>
			{items.length ? (
				<List
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}>
				</List>
			) : (
				<p style={{marginTop: '2px'}}>List is empty</p>
			)}
		</main>
	);
};

export default Content;
