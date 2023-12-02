/* 封装自定义hook——use开头的函数

    ps：
    hook使用规则
    1、只能在组件的顶层使用
    2、不能在if、for循环、其它函数中使用
*/
import { useState } from "react"

function useToggle(){
    //可复用的逻辑代码
    const [value, setValue] = useState(true)
    const toggle = () => setValue(!value)
    //哪些状态和回调函数需要在其他组件中使用，就return出去
    return {
        value,
        toggle
    }
}

function App() {
    const { value ,toggle} = useToggle()
    return (
        <div>
            {value && <div>this is div</div>}
            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default App