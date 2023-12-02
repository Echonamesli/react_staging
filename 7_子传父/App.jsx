import { useState } from "react";

/* 子传父:
        在子组件中调用父组件中的函数并传递参数
    */
function Son({onGetSonMsg}) {
    const data = '1234'
    return (
        <div>
            this is son
            <button onClick={() => onGetSonMsg(data)}>sendMsg</button>
        </div>
    )
}

function App() {
    const [msg, setMsg] = useState('')
    const getMsg = (msg) => {
        console.log(msg);
        setMsg(msg)
    }
    return (
        <div>
            this is App, {msg}
            <Son onGetSonMsg={getMsg}/>
        </div>
    )
}

export default App