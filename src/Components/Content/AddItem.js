import React, {useRef} from 'react';
import {FaPlus} from "react-icons/fa";

const AddItem = ({newItem, setNewItem, handleSumbit}) => {
	const inputRef = useRef();
	return (
		<form className="Form" onSubmit={handleSumbit}>
			<label className="Label" htmlFor="addItem">Add Item</label>
			<input
				className="AddInput"
				ref={inputRef}
				type="text"
				id="addItem"
				placeholder="Add Item"
				autoFocus
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button
				className="addButton"
				type="submit"
				aria-label="addItem"
				onClick={() => inputRef.current.focus()}
			>
				<FaPlus></FaPlus>
			</button>
		</form>
	);
};

export default AddItem;
