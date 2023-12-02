import './index.css'

export default function App() {
    return (
        <div>
            {/* 行内样式控制 */}
            <span style={{ color: 'red', fontSize: '50px' }}>this is a span</span>
            {/* 通过class类名控制 */ }
            <span className='foo'>this is class foo</span>
        </div>
    )
}
