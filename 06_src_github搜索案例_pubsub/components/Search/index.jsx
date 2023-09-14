import React, { Component } from "react";
import axios from "axios";
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyWord },
    } = this; 
    //2:发送网络请求前通知List更新状态
    PubSub.publish('atguigu',{ isFirst: false, isLoading: true })
    //3:发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
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
    );
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
