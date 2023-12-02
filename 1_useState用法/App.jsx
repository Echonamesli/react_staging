import { useState } from "react"
// ctrl+enter 跳到下一行

export default function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    //count++ //这样直接修改是无法引发视图更新的
    setCount(count+1)  //状态不可变！状态是只读的！所以应该始终替换它而不是修改它
  }

  //修改对象状态
  const [form, setForm] = useState({name: 'Lila'})
  const changeForm = () => {
    //form.name = 'aoliao'  //错误
    setForm({    // 对象类型的状态变量，应该始终传给set方法一个全新的对象来进行修改
      ...form,
      name: 'aoliao'
    })
  }
  return (
    <div>
      <button onClick={handleClick}>修改count{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
  </div>
  )
}
