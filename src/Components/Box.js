import React from 'react';

const Box = ({value, isDarkText}) => {
	return (
		<div className="box" style={{
			background: value,
			color: isDarkText ? '#000' : '#fff',
		}}>
			<p>{value ? value : 'List is empty'}</p>
		</div>
	);
};

export default Box;
