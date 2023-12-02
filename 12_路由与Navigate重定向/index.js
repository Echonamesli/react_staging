//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App.jsx'
//引入路由，用于包裹整个应用
/* HashRouter与BrowserRouter
    1、底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下版本
        HashRouter使用的是URL的哈希值
    2、path表现形式不一样：
        BrowerRouter的路径中没有#，例如：localhost:3000/demo/test
        HashRouter的路径包含#，例如：localhost:3000/#/demo/test
    3、刷新后对路由state参数的影响
        BrowerRouter没有任何影响，因为state保存在hostory对象中
        HashRouter（没有history这个对象）刷新后会导致路由state参数的丢失
                    
*/
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
//渲染App到页面
root.render(
    <BrowserRouter>
    {/* （通常为App组件） */}
        <App/>
    </BrowserRouter>
)