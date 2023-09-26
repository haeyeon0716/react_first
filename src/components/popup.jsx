import {useEffect, useState} from 'react';

function Popup(){
    const [Num, setNum] = useState(0)
    useEffect(()=>{
        //컴포넌트가 mount시 한번만 실행
        console.log('popup 생성');

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