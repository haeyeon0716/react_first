import { useState } from 'react';
import './style.scss';

function App() {
	const [Degree, setDegree] = useState(0);

	return (
	<>
	<button onClick = {()=> setDegree(Degree-45)}>왼쪽으로 회전</button>
	<button onClick = {()=> setDegree(Degree+45)}>오른쪽으로 회전</button>
	<article style = {{transform: `rotate(${Degree}deg)`}}>{Degree}</article>
	</>
	);
}

export default App;

