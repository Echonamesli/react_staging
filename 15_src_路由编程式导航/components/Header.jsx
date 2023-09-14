import { func } from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  //useNavigate————编程式路由导航,可传入数值进行前进或后退，类似history.go()方法
  function back() {
    navigate(-1);
  }
  function forward() {
    navigate(1);
  }
  return (
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={back}>后退</button>
      <button onClick={forward}>前进</button>
      </div>
    </div>
  );
}
