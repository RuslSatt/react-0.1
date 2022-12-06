import List from "./List";

const Content = ({items}) => {

	return (
		<>
			{items.length ? (
				<List items={items}></List>
			) : (
				<p style={{marginTop: '2px'}}>List is empty</p>
			)}
		</>
	);
};

export default Content;
