import React, { useState } from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate()
  const [messages] = useState([
    { id: "001", title: "消息1", content: "穿越逆境" },
    { id: "002", title: "消息2", content: "抵达繁星" },
    { id: "003", title: "消息3", content: "酸奶粽子" },
    { id: "004", title: "消息4", content: "抹茶茉莉" },
  ]);
  
  function showDetail(m){
        navigate('detail',{
          replace:false,
          state:{
            id:m.id,
            title:m.title,
            content:m.content
          }
        })
  }
  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              {/* 路由传参：state参数 */}
              <Link to="detail" state={{
                id:m.id,
                title:m.title,
                content:m.content
              }}>{m.title}</Link>&nbsp;&nbsp;
              <button onClick={()=>showDetail(m)}>查看详情</button>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 指定路由组件的展示位置 */}
      <Outlet/>
    </div>
  );
}
