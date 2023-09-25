import { useState } from 'react';
import './style.scss';

function App() {
	const [Colors, setColors] = useState(['red', 'green', 'blue']);
	const newColors =  [...Colors];
	newColors[0] = 'hotpink';

	return (
	<>
		{Colors.map((color,idx)=>(
			<button style = {{backgroundColor: color}} key={idx}>{color}</button>
		))}
		<button onClick={()=>setColors(newColors)}>색상변경</button>
	</>
	);
}

export default App;

