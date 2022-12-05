const API = async (url = '', options = null, errMsg = null) => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) throw Error('Please reload the application');
	} catch (e) {
		errMsg = e.message;
	} finally {
		return errMsg;
	}
}

const sendRequest = async (type = '', item = null, url = '') => {

}

export {API, sendRequest}
