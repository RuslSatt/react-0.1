import React from 'react';

const SearchItem = ({search, setSearch}) => {
	return (
		<form className="Form" onSubmit={(e) => e.preventDefault()}>
			<label className="Label" htmlFor="searchForm">Add Item</label>
			<input
				className="searchInput"
				type="text"
				id="searchForm"
				placeholder="Search Item"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
};

export default SearchItem;
