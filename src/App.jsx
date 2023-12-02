import React from 'react'
//NavLink与Link组件类似，且NavLink可实现导航的高亮效果，NavLink的默认类名时是active，可自定义class
import { NavLink,Routes,Route,Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  return (
    <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 声明式导航：通过<Link/>组件导航 */}
          {/* 路由链接(有两种Link和NavLink)，但Navlink有自带的高亮效果 */}
          {/* 需要自定义高亮效果为atguigu时，先解构出isActive，当我们点击Navlink的时候isActive为true */}
          <NavLink className={({isActive})=>isActive?'list-group-item atguigu':'list-group-item'} to="/about">About</NavLink>
          <NavLink className="list-group-item" to="/home">Home</NavLink>
          {/* 编程式/命令式导航：通过useNavigate钩子导航 */}
          <button onClick={()=> navigate('/home')}>跳转到home</button>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <Routes>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/" element={<Navigate to="/about"/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
