// App -> A -> B
/* 目的：把App的数据直接传递给B
    1、createContext方法创建一个上下文对象
    2、顶层组件(App)通过Provider组件提供数据
    3、底层组件(B)通过useContext钩子函数使用数据
*/
import { createContext, useContext } from "react"

const MsgContext = createContext()

function A() {
    return (
        <div>
            this is A component
            <B />
        </div>
    )
}

function B() {
    const msg = useContext(MsgContext)
    return (
        <div>
            this is B component,{msg}
        </div>
    )
}

function App() {
    const msg = 'this is app msg'
    return (
        <div>
            <MsgContext.Provider value={msg}>
                this is App
                <A />
            </MsgContext.Provider>
        </div>
    )
}

export default App