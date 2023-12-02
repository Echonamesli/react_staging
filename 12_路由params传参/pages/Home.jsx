import React, { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";  //一级路由的话呈现路由的时候只能用{element},无法使用Outlet

export default function Home() {
  return (
    <div>
      <h2>我是Home的内容</h2>
      <div>
        <ul className="nav nav-tabs">
          {/* 子级路由的路径不需要/，/的话表示根路径，可以写./或者省略不写 */}
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet/>
      </div>
    </div>
  );
}
