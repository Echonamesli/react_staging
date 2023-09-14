import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";
export default class App extends Component {
  /*  github搜索案例总结
      1、解构赋值+重命名
        let obj = {a:{b:1}}
        const{a} = obj  //传统解构赋值
        const{a:{b}} = obj  //连续解构赋值
        const{a:{b:value}}  //连续解构赋值+重命名
      2、消息订阅与发布——兄弟组件通信。
        a)先订阅，再发布
        b)记得取消订阅
      3、fetch发送请求
   */
  render() {
    return (
      <div className="container">
        <Search />
        <List/>
      </div>
    );
  }
}
