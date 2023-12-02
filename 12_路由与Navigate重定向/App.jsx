import React, { Suspense, lazy } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
//import About from './pages/About'
//import Home from './pages/Home'\
//路由懒加载
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
//2021年开始都改用函数式组件了
export default function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接(有两种Link和NavLink)，但Navlink有高亮效果 */}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 要在呈现路由组件的地方注册路由，Routes和Route要配合使用，且必须要用Routes包裹Route */}
              {/* path属性用于定义路径，element属性用于定义当前路径所对应的组件 */}
              {/* Route相当于一个if语句，如果该路径与当前URL匹配，则呈现其对应的组件 */}
              {/* <Route caseSentitive>属性用于指定匹配时是否区分大小写(默认为false，即不区分大小写) */}
              {/* 当URL发生变化时，<Routes>都会查看其所有子<Route>元素以找到最佳匹配并呈现组件 */}
              {/* <Route>也可以嵌套使用，且可配合useRoutes()配置路由表，但需要通过<Outlet>组件来渲染其子路由 */}
              <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  {/* 只要Navigate组件被渲染，就会修改路径，切换视图 */}
                  <Route path="/" element={<Navigate to="/about" />}></Route>
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
