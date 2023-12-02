//引入react核心库
import React from 'react'

//引入App组件
import App from './App.jsx'

import store from './store'
//react-redux负责把redux和react连接起来，内置Provider组件通过store参数
//把创建好的store实例注入到应用中
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'))

root.render(
        <Provider store={store}>
                <App />
        </Provider>
)