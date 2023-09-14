//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App.jsx'
//引入路由，用于包裹整个应用，HashRouter与BrowserRouter作用一样，但BrowserRouter修改的是地址栏的hash值
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
//渲染App到页面
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)