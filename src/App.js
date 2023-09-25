import { useState } from 'react';
import './style.scss';

function App() {

	const [Name, setName] = useState('David')

	return (
	<>
		<h1>{Name}</h1>
		<button onClick={()=>setName('Andy')}>이름변경</button>
	</>
	);
}

export default App;

