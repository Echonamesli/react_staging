import React, { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";  //一级路由的话呈现路由的时候只能用{element},无法使用Outlet

export default function Home() {
  return (
    <div>
      <h2>我是Home的内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul>
        {/* 当路由嵌套时，需要<Outlet/>指定二级路由组件呈现的位置 */}
        {/* 二级路由出口 */}
        <Outlet/>
      </div>
    </div>
  );
}
