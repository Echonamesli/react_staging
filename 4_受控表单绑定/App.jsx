import { useState } from 'react'
//受控表单绑定：组件状态state控制表单状态+表单最新值设置给state
export default function App() {
    const [value, setValue] = useState('')
    return (
        <div>
            <input value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text" />
        </div>
    )
}
