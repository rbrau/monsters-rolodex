import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
	//[value, setvalue]=useState(initialValue)
	const [searchField, setSearchField] = useState('');
	console.log({ searchField });
	const [title, setTitle] = useState([]);
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, SetFilteredMonsters] = useState(monsters);

	//({call-back-function, effect we want}, [dependencies,state values or props, if they changes I activate the function])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []); //Empty dependency --> "use function only once when it mounts"

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		SetFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};
	const onTitleChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setTitle(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>{title}</h1>

			<SearchBox
				onChangeHandler={onSearchChange}
				placeHolder={'search monsters'}
				className={'monsters-search-box'}
			/>
			<br />
			<SearchBox
				onChangeHandler={onTitleChange}
				placeHolder={'set title'}
				className={'title-search-box'}
			/>

			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
