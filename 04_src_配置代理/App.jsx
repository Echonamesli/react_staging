import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudentData = () => {
    //配置代理服务器（我们现在电脑的端口号是3000，要去请求5000的服务器）
    //package.json:   "proxy":"http://localhost:5000" ————意味着所有你表面上写的发给3000的请求都会转发给5000
    //但这种配置的方式是一次只能配置一个代理
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  getCarData = () => {
    //第二种配置代理方式
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log("失败了", error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}
