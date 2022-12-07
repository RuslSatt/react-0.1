import React from 'react';
import Button from "./Content/Button";

const Header = ({disabled, reqType, setReqType}) => {
	return (
		<header className="headerQuery">
			<Button reqType={reqType} setReqType={setReqType} disabled={disabled} id={'users'} name={'Users'}></Button>
			<Button reqType={reqType} setReqType={setReqType} disabled={disabled} id={'posts'} name={'Posts'}></Button>
			<Button reqType={reqType} setReqType={setReqType} disabled={disabled} id={'comments'}
					name={'Comments'}></Button>
		</header>
	);
};

Header.defaultProps = {
	title: 'List',
}

export default Header;
