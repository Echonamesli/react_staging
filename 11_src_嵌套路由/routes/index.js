//只要Navigate组件被渲染，就会修改路径，切换视图
import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'

export default [
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/home',
      element: <Home/>,
      children:[
        {
            path:'news',
            element:<News/>
        },
        {
            path:'message',
            element:<Message/>
        }
      ]
    },
    {
      path:'/',
      element: <Navigate to="/about"/>
    },
  ]