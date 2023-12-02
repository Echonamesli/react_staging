import { useSelector, useDispatch } from "react-redux"
//导入actionCreater
import { increment, decrement, addToNum } from "./store/modules/counterStore"
import { fetchChannelList } from "./store/modules/channelStore"
import { useEffect } from "react"

function App() {
    const { count } = useSelector(state => state.counter)
    const { channelList } = useSelector(state => state.channel)
    const dispatch = useDispatch()
    //使用useEffect触发异步请求
    useEffect(() => {
        dispatch(fetchChannelList())
    }, [dispatch])
    return (
        <div>
            {/* 1、提交action*/}
            <button onClick={() => dispatch(decrement())}>对count进行减1</button>
            <button onClick={() => dispatch(increment())}>对count进行加1</button>
            {/* 2、提交action并传参 */}
            <button onClick={() => dispatch(addToNum(10))}>对count加到10</button>
            <button onClick={() => dispatch(addToNum(20))}>对count加到20</button>
            {count}

            <ul>
                {channelList.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default App