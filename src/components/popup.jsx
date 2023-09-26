import {useEffect, useState} from 'react';
//useEffect: 컴포넌트의 생성, 변화, 소멸의 특정 상태마다 원하는 이벤트 연결가능
//useEffect(실행할 함수, 의존성 배열)

//의존성 배열이 비어있는 상태에서 함수 안쪽에 구문을 입력하면 (컴포넌트 마운트시 한번만 실행)
//실사용 사례 - 팝업 생성시 스크롤바 제거 
//실사용 사례 - 특정 컴포넌트가 마운트 되었을 때에만 스크롤 이베트 연결
//실사용 사례 - 무거운 외부데이터를 fetching 할 때 

//의존성 배열이 비어있는 상태에서 리턴되는 함수 안쪽에 구문을 입력하면 (컴포넌트 언마운트시 한번만 실행)
//실사용 사례 - 팝업 제거시 스크롤바 생성
//실사용 사례 - 특정 컴포넌트가 언마운트 될 때 스크롤 이벤트 제거

//의존성 배열에 특정 state를 담아두고 함수 안쪽에 구문을 입력하면 (해당 state값이 변경 될 때마다 실행)
//실사용 사례 - 특정 이벤트가 발생해서 새로운 데이터를 fetching할 때마다 로딩바 출력

function Popup(){
    console.log('팝업 재호출');
    
    const [Num, setNum] = useState(0)
    useEffect(()=>{
        //컴포넌트가 mount시 한번만 실행
        console.log('popup 생성');
        console.log('무거운 유튜브 데이터 fetching');

        //컴포넌트가 unmount시 한번만 실행
        return ()=>{
            console.log('popup 소멸');
        }
    },[])

    useEffect(()=>{
        console.log('popup의 Num상태 변화');
    },[Num])

    return(
    <aside>
        <h1>{Num}</h1>
        <button onClick={()=>setNum(Num -1)}>minus</button>
        <button onClick={()=>setNum(Num +1)}>plus</button>
    </aside>
    )
}

export default Popup;