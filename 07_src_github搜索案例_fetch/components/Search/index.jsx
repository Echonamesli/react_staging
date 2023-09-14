import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
  search = async () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;
    
    //2:发送网络请求前通知List更新状态
    PubSub.publish("atguigu", { isFirst: false, isLoading: true });

    //3:发送网络请求
    //http://localhost:3000是一致的路径所以其实可以省略
    /* axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (response) => {
        //请求成功后通知List更新状态
        PubSub.publish('atguigu',{
          isLoading: false,
          users: response.data.items,
        })
      },
      (error) => {
        //请求失败后通知List更新状态
        PubSub.publish('atguigu',{ isLoading: false, err: error.message })
      }
    ); */

    /* 
      jquery和axios都是原生对象xhr(XmlHttpRequest)的封装，都需要npm install并import，有一种是不用xhr发请求的，就是fetch原生函数
      利用fetch取代xhr发送网络请求，数据返回了但是没有序列化都是二进制，所以需要json序列化后再使用
      fetch缺点：老版本浏览器可能不支持
    */

    //fetch发送网络请求——未优化版本
    /* fetch(`/api1/search/users2?q=${keyWord}`)
      .then(
        (response) => {
          console.log("联系服务器成功了");
          return response.json(); //成功的话返回的是一个promise实例，所以后面要再then一次
        },
        (error) => {
          console.log("联系服务器失败了", error);
          return new Promise(()=>{})  //返回初始化（pending状态）的promise，这样就不会接着往下走
        }
      )
      .then(
        (response) => {console.log('获取数据成功了',response);},  //如果上一个promise返回的是一个非promise，则这里仍然会执行成功时的回调函数
        (error) => {console.log('获取数据失败了',error);}
      ); */

      //fetch发送网络请求——优化版本（async和await）
      try {
        const response = await fetch(`/api1/search/users2?q=${keyWord}`)
        const data = await response.json()
        PubSub.publish('atguigu',{
          isLoading: false,
          users: data.items,
        })
      } catch (error) {
        PubSub.publish('atguigu',{ isLoading: false, err: error.message })
      }
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索人类可爱幼崽</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
