//敲rcc(react class component)即可生成以下类组件模板，敲rfc(react function component)即可生成函数组件模板

import React, {Component} from 'react'
import './index.css'
export default class Welcome extends Component{
    render(){
        return (
            <h2 className='title'>my name is netease</h2>
        )
    }
}

