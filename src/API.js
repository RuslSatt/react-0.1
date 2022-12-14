const URL = 'https://jsonplaceholder.typicode.com/posts'
const getItems = async () => {
	try {
		const response = await fetch(URL);
		if (!response.ok) throw Error('Error');
		return await response.json();
	} catch (e) {
		console.log(e.message);
	}
}

export {getItems}
