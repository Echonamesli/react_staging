import React from 'react'
import { NavLink,useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  //根据路由表生成对应的路由规则
  const element = useRoutes(routes)

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
          <NavLink className="list-group-item" to="/about">About</NavLink>
          {/* 默认情况下当Home的子组件匹配成功，Home的导航也会高亮，但加了end后，如果Home的子级路由(news或者message)匹配到的话，Home不再高亮，点击哪个子级路由哪个子级路由自己高亮 */}
          <NavLink className="list-group-item" end to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
            {/* <Routes>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/" element={<Navigate to="/about"/>}></Route>
            </Routes> */}
            {/* 改成用路由表的方式注册路由  */}
            {element}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
