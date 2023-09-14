import React, {Component} from 'react'
//防止样式冲突使用样式模块化引入
import hello from './index.module.css'
export default class Hello extends Component{
    render(){
        return (
            <h2 className={hello.title}>what is your name</h2>
        )
    }
}
