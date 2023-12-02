//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App.jsx'

//我是用npm安装的react，默认安装的是18版本，18版本不支持ReactDOM.render，所以要改写一下（不改写也行但是会报warning）
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'))
//渲染App到页面
root.render(<App/>)