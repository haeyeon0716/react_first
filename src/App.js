
import './style.scss';

import {useState} from 'react';

function App() {
	console.log('app')
	//const [상태값, 상태변경전용함수] = useState(초기값);
	//리액트 컴포넌트는 State값이 State변경 함수로 변경 돼야지만 컴포넌트가 재랜더링됨
	//숫잘를 증가, 감소 시킬때 전위증감연산잘를 써야지만 해당 랜더링 사이클에서 바로 값이 변경되면서 다음번 랜더링에 반영됨
	//State에 담기는 값이 바뀔 때에만 화면의 갱신이 일어나기 때문에 
	//State에 담기는 데이터만 관리 하면 되므로 유지보수가 편함
	let [Num, setNum] = useState(0);
	console.log(Num);

	return (
	<>
		<h1>{Num}</h1>

		<button onClick = {() => setNum(--Num)}>minus</button>
		<button onClick = {() => setNum(++Num)}>plus</button>
	</>
	) 
}

export default App;

