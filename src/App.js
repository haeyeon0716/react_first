import { useState } from 'react';
import './style.scss';
import Popup from './components/popup';

//state 생성 true, false
//jsx에서 state 값이 true 일 때만 Popup보이도록 처리
//버튼 클릭 할 때 마다 state의 true, false값 변경

function App() {
	const [Open, setOpen] = useState(false);

	return (
	<>
		<button onClick={()=>setOpen(true)}>팝업 열기</button>
		<button onClick={()=>setOpen(false)}>팝업 닫기</button>
		{Open && <Popup />}
	</>
	);
}

export default App;