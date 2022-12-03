import React, {useState} from 'react';

const Input = ({handleSubmitColor, isDarkText, setIsDarkText}) => {
	const [item, setItem] = useState('')
	return (
		<form onSubmit={(e) => handleSubmitColor(e, item)}>
			<label htmlFor="addColor"></label>
			<input
				style={{marginTop: '20px'}}
				className="searchInput"
				type="text"
				autoFocus
				value={item}
				onChange={(e) => setItem(e.target.value)}
			/>
			<button
				onClick={() => setIsDarkText(!isDarkText)}
				className="colorButton">
				Toggle text color
			</button>
		</form>
	);
};

export default Input;
