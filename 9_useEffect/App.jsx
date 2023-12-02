/* useEffect——react hook函数
    用于在组件中创建不是由事件引起而是由渲染本身引起的操作
    
    useEffect(()=>{}, [])
    参数1: 副作用函数
    参数2：数组依赖项
            1) 空数组依赖——副作用函数只在组件初始渲染完毕后执行一次
            2）没有依赖项——组件初始渲染+组件更新时执行
            3）添加特定依赖项——组件初始渲染+特定依赖项变化时执行
    
    useEffect——清除副作用
    清除副作用的函数最常见的执行事件是在组件卸载时自动执行
            */
import { useEffect, useState } from "react"

const URL = 'http://geek.itheima.net/v1_0/channels'

function App() {
    const [list, setList] = useState([])
    useEffect(()=>{
        async function getList(){
            const res = await fetch(URL)
            const jsonRes = await res.json()
            console.log(jsonRes);
            setList(jsonRes.data.channels)
        }
        getList()
    }, [])
    return (
        <div>
                this is App
                <ul>
                    {list.map(item=><li key={item.id}>{item.name}</li>)}
                </ul>
        </div>
    )
}

export default App