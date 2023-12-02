/* 父传子:
    1、props是只读对象，子组件只能读取不能修改 
    2、props可以传递任意数据，包括jsx
    */
function Son(props) {
    console.log(props);   
    return <div>this is a son, my father name is {props.name}, this is jsx {props.child}</div>
}
/* 3、children是特殊的prop属性
     当我们把内容嵌套在son组件标签中时，son会自动在名为children的prop属性中接收该内容 */
function Son2(props) {
    console.log(props);   
    return <div>this is a son, {props.children}</div>
}

function App() {
    const name = 'App'
    return (
        <div>
            <Son 
            name={name}
            age={18}
            flag={false}
            list={['vue', 'react']}
            obj={{name:'jack', sex:'female'}}
            callback={() => console.log(123)}
            child={<span style={{color:'purple',fontSize:'50px'}}>this is a span</span>}/>
            
            <br/>
            <br/>
            <br/>

            <Son2>
                <span>this is a span</span>
            </Son2>
        </div>
    )
}

export default App