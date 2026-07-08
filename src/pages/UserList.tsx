import { useState, useCallback } from 'react'
import { Button } from 'antd'

// 子组件
function ChildComponent() {
  console.log('子组件 - ChildComponent 重新渲染！')
  const [count, setCount] = useState<number>(0)

  // const handleSubClick = useCallback(() => {
  //   console.log('子组件 - handleSubClick 重新渲染！')
  //   setCount((num) => num + 1)
  // }, [])

  const handleSubClick = () => {
    console.log('子组件 - handleSubClick 重新渲染！')
    setCount((num) => num + 1)
  }

  return (
    <div>
      <h2>子组件计数器：{count}</h2>
      <Button onClick={handleSubClick}>增加计数 {count}</Button>
    </div>
  )
}

// 父组件
function ParentComponent() {
  const [count, setCount] = useState<number>(0)

  console.log('父组件 - ParentComponent 重新渲染！')

  return (
    <div>
      <h1>父组件计数器：{count}</h1>
      <Button onClick={() => setCount((num) => num + 1)}>增加计数 {count}</Button>
      <div className="mt-3">
        <ChildComponent />
      </div>
    </div>
  )
}

export default ParentComponent
