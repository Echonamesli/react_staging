import { useRef } from 'react'
/* 1、useRef生成ref对象，绑定到dom标签身上
    2、当dom可用时，通过ref.current获取dom
    注意：当组件渲染完毕dom生成之后ref对象才可用
 */
export default function App() {
    const inputRef = useRef(null)
    const showDom = () => {
        console.log(inputRef.current);
    }
    return (
        <div>
            <input ref={inputRef}
                type="text" />
            <button onClick={showDom}>获取dom的按钮</button>
        </div>
    )
}
