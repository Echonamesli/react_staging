import React,{Fragment} from 'react'

export default function Demo() {
  return (
    /*  由于需要转化成真实DOM，所以需要有一个标签兜底，将模板中的元素包裹进去
        Fragment类似template，会被react丢掉，不会渲染成真实节点，其实有更简单的写法，直接写空标签<></>
        Fragment允许后面写一些属性，但是空标签不能写属性
      */
    <Fragment key={1}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </Fragment>
  )
}
