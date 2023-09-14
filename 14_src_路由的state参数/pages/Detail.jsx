import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
  //state参数：当前页面刷新可以保留，但新页面打开无法保留
  const {state:{id,title,content}} = useLocation()
  return (
    <div>
      <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
      </ul>
    </div>
  )
}
