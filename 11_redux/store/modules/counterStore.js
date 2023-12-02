/* redux实现数据管理
    1、state，一个对象，存放着管理的数据状态
    2、action，一个对象描述怎么改数据
    3、reducer，一个函数，根据action的描述生成一个新的state
*/
import { createSlice } from "@reduxjs/toolkit";
 const counterStore = createSlice({
    name: 'counter',
    //初始化state
    initialState: {
        count: 0
    },
    //修改state的方法：同步方法，支持直接修改
    reducers: {
        increment (state){
            state.count++
        },
        decrement (state){
            state.count--
        },
        addToNum(state, action){
            state.count = action.payload
        }
    }
 })

 //解构出actionCreater函数
 const { increment, decrement, addToNum} = counterStore.actions
 //获取reducer
 const reducer = counterStore.reducer

 //以按需导出的方式导出actionCreater（同步修改方法）
 export { increment, decrement, addToNum}
 //以默认导出的方式导出reducer
 export default reducer