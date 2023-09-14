import React from 'react'
import { NavLink,useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  //useRoutes————根据路由表动态生成对应的路由规则
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
          <NavLink className="list-group-item" to="/home">Home</NavLink>
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
            {/* 即<Route>也可以嵌套使用，且可配合useRoutes()配置路由表，但需要通过<Outlet>组件来渲染其子路由 */}
            {element}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
