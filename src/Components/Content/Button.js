import React from 'react';

const Button = ({name, id, reqType, setReqType, disabled}) => {
	return (
		<button className={id === reqType ? 'selected' : null} disabled={disabled} onClick={() => setReqType(id)}>
			{name}
		</button>
	);
};

export default Button;
