import React, { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Home() {
  const [sum, setSum] = useState(1); //定义sum为一个state，以及更新sum的函数——它接收一个新的 state 值并将组件的一次重新渲染加入队列。在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state
  return (
    <div>
      <h3>我是Home的内容</h3>
      {/* 只要<Navigate>组件被渲染，就会修改路径，切换视图 */}
      {/* Navigate组件一定要搭配to使用,不写replace的话默认是false，即push模式（会留下痕迹，可以退回去），写为true则为replace模式 */}
      {/* 根据sum的值决定是否切换视图 */}
      {sum===2 ? <Navigate to="/about" replace={true} /> : <h4>当前sum的值是: {sum}</h4>}
      <button onClick={()=>setSum(2)}>点我将sum变为2</button>
    </div>
  );
}
