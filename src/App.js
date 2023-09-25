
import Footer from './components/footer';
import Header from './components/header';
import List from './components/list';
import Popup from './components/popup';
import './style.scss';

//원시형자료는 : 메모리, 값 자체가 callstack에서 생성된 다음에 저장
//원시형자료는 변수값을 다른 변수에 복사했을때 값 자체가 복사되는 deep copy;
//복사된 값을 변경해도 원본은 그대로 유지되는 불변성 유지 (immutable);

//참조형자료는 : 메모리(callstack), 배열, 객체등의 값 자체는 (heap memory) 생성돔
//callstack에 있는 메모리에는 배열의 값 자체가 담기는게 아닌 힙메모리에 있는 값의 위치값이 담김
//참조링크가 담겨있는 변수를 새로운 변수에 옮겨담으면 값이 복사되는 것이 참조링크만 복사됨
//결국 같은 값을 가리키고 있는 두개의 링크만 복사가됨
//복사가된 링크의 값을 바꾸면 결국 원본값이 훼손됨 (shallow copy) 불변성 유지 안됨

//리액트 개발시 불변성이 중요한 이유 
//리액틍는 원본이 있어야 복사본과의 차이점을 분석
//리액트안에서 배열이나, 객체같은 참조형 자료는 무조건 deepcopy 해서 데이터 변경해야함

function App() {
	let student = {
		name: 'David',
		age: 20,
	}

	let newStudent ={...student};
	newStudent.name = 'Andy';
	console.log(newStudent);
	console.log(student);

	let isPop = true;
	let isFooter = false;
	return (
		<>
			<Header />
			{isFooter && <Footer />}
			{isPop ? <Popup /> : null}
			<List />
		</>
	);
}

export default App;

/*
hooks
- 리액트 16버전 부터 새로낭온 개념으로 리액트에서 자주 쓰이는 상태관리, 생명 주기에 관련된 내용들을 
- hook이라는 형태의 내장함수로 편의기능을 제공
- hook이 나오기 전까지는 class방식으로 컴포넌트를 생성 및 기능 확장을 비효율적으로 처리

자주쓰는 hook3대장
useState - 컴포넌트의 화면의 랜더링을 담당하는 중요한 정보값 관리
useEffect - 컴포넌트의 생명주기에 관련된 함수 (생성, 변화, 소멸)
useRef - 컴포넌트 안쪽에서 특정 값으 참조객체에 담을 때

리액트의 성능관리를 hook

리액트에서의 memoization = 메모리 점유율을 늘려서 성능 개선
자바 스크립트는 기본적으로 Garbage collector에 의해 메모리 관리 됨
아래의 hook을 통해서 특정 값을 강제 메모이제이션 처리 하면 가비지콜랙터에서 제외
memo - 컴포넌트 자체를 메모이제이션
useCallback - 컴포넌트 안쪽의 핸들러 함수 자체를 메모이제이션
useMemo - 특정 핸들ㅇ러 함수의 리턴값을 메모이제이션
*/