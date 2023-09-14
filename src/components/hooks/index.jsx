import React, { useRef } from "react";
import ReactDOM from "react-dom";
//类组件写法
/* export default class index extends Component {
  state = { count: 0 };
  myRef = React.createRef()
  show = ()=>{
    alert(this.myRef.current.value)
  }
  add = () => {
    //setState的函数式写法
    this.setState((state) => ({ count: state.count + 1 }));
  };
  unmount = ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root))
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
        this.setState(state=> ({ count: state.count + 1 }))
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <button onClick={this.show}>点我提示数据</button>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>点我卸载组件</button>
      </div>
    );
  }
} */
/*  之前因为函数式组件没有this，所以不能使用state
    现在推出了hook，可以让我们在函数组件中使用state及其他的react特性
    三个常用的Hook：
    1）State hook: React.useState() ——让我们可以在函数组件中使用state
    2) Effect Hook: React.useEffect() ——让我们可以在函数组件中使用生命周期钩子
                    useEffect()Hook可以看作如下三个函数的组合
                        componentDidMount()、componentDidUpdate()、componentWillUnmount()
    3) Ref Hook: React.useRef()
 */
//函数式组件写法
function Demo() {
  console.log("Demo");
  const [count, setCount] = React.useState(0);
  const myRef = React.useRef()
  function show(){
    alert(myRef.current.value)
  }
  React.useEffect(() => {
    let timer = setInterval(() => {   //在此可以执行任何带副作用的操作
      setCount((count) => count + 1);
    }, 1000);
    return () => {  //在组件卸载前执行——此处就是useEffect第一个回调函数的返回值
      clearInterval(timer);  //在此做一些收尾工作，比如清除定时器取消订阅
    };
  }, []); //如果指定的是[]，则useEffect的第一个回调函数只会在第一次render后执行一次；空数组表明谁都不监测，只在最初挂载的时候才会执行一次，如果是[count]表示每次count变化useEffect都会执行一次
  //加的回调按钮
  function add() {
    //setCount(count + 2);  //第一种写法setCount(newValue)
    setCount(
      (
        count //第二种写法setCount(value=>newValue)
      ) => count + 2
    );
  }
  //卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>点我卸载组件</button>
      <input type="text" ref={myRef}/>
      <button onClick={show}>点我提示数据</button>
    </div>
  );
}

export default Demo;
