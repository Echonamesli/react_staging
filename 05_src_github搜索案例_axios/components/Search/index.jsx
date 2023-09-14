import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  search = () => {
    //1:获取用户输入(连续解构赋值并重命名)
    //console.log(this.keyWordElement.value);
    //const { value } = this.keyWordElement; //第一种解构出input节点的value的方式
    const {
      keyWordElement: { value: keyWord },
    } = this; //第二种方式：解构赋值的连续性写法，先从this中解构出keyWordElement，再从keyWordElement中解构出value,并把value重命名为keyWord
    //2:发送网络请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    //3:发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (response) => {
        //请求成功后通知App更新状态
        this.props.updateAppState({
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        //请求失败后通知App更新状态
        this.props.updateAppState({ isLoading: false, err: error.message });
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
