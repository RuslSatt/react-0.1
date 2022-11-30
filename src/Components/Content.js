import {useState} from "react";
import {FaTrashAlt} from "react-icons/fa";

const Content = () => {
	const [items, setItems] = useState([
		{
			id: '1',
			name: 'Bob',
			checked: true,
		},
		{
			id: '2',
			name: 'Max',
			checked: false,
		},
	]);

	const handleCheck = (id) => {
		const list = [...items];
		const item = list.find((item) => item.id === id);
		if (item) {
			item.checked = !item.checked;
			setItems(list);
		}
		localStorage.setItem('list', JSON.stringify(list))
	}

	const handleDelete = (id) => {
		const list = items.filter((item) => item.id !== id);
		setItems(list);
		localStorage.setItem('list', JSON.stringify(list))
	}

	return (
		<main>
			{items.length ? (
				<ul>
					{items.map((item) => (
						<li className="item" key={item.id}>
							<input
								type="checkbox"
								onChange={() => handleCheck(item.id)}
								checked={item.checked}
							/>
							<label
								style={(item.checked) ? {textDecoration: 'line-through'} : null}
								onDoubleClick={() => handleCheck(item.id)}
							>{item.name}</label>
							<FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0"/>
						</li>
					))}
				</ul>
			) : (
				<p style={{marginTop: '2px'}}>List is empty</p>
			)}
		</main>
	);
};

export default Content;
