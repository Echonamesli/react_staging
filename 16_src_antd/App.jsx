import React from 'react'
//按需引入,最新的antd样式不需要手动引入了，会自动引入
import {Button, DatePicker}  from 'antd'
import {CheckCircleOutlined} from '@ant-design/icons'
const { RangePicker } = DatePicker;

export default function App() {
  return (
    <div>
      <button>点我</button>
      <br />
      <Button type='primary'>antd主按钮</Button>
      <br />
      <Button type='link'>antd链接形式的按钮</Button>
      <br />
      <CheckCircleOutlined />
      <br />
      <DatePicker/>
      <br />
      <RangePicker />
  </div>
  )
}
