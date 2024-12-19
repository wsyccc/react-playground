import  {Profiler, useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Profiler id={"Counter"} onRender={(id, phase, actualDuration) => {
      console.log(`${id} 操作：${phase} 实际渲染时间：${actualDuration}ms`);
    }}>
      <div>
        count: {count}
        <button onClick={() => setCount((count) => count + 1)}>add</button>
      </div>
    </Profiler>

  )
}

export default Counter;