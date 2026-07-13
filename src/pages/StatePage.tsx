// state 组件状态
import { Component, useState } from 'react'
import type { JSX } from 'react'
import { Button } from 'antd'

// Props（没有就写空对象）
interface CounterProps {}

// State：声明状态结构
interface CounterState {
  count: number
}

class Counter1 extends Component<CounterProps, CounterState> {
  // 写法一：constructor 里初始化
  constructor(props: CounterProps) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  // 写法二（等价，更常见）：
  // state: CounterState = { count: 0 }

  increment = () => {
    // 函数式更新：拿到上一次 state，再返回新 state
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  render(): JSX.Element {
    return (
      <div>
        <div>Count1: {this.state.count}</div>
        <Button onClick={this.increment}>Increment</Button>
      </div>
    )
  }
}

function Counter2(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <div>Count2: {count}</div>
      <Button type="primary" onClick={increment}>
        Increment
      </Button>
    </div>
  )
}

// 生命周期添加到类中
type ClockProps = {}

type ClockState = {
  date: Date
}

class Clock extends Component<ClockProps, ClockState> {
  // 实例属性：定时器 ID（浏览器里是 number，Node 里可写成 ReturnType<typeof setInterval>）
  timer: ReturnType<typeof setInterval> | null = null

  state: ClockState = {
    date: new Date(),
  }

  componentDidMount(): void {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(): void {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render(): JSX.Element {
    return <div>现在是：{this.state.date.toLocaleTimeString()}</div>
  }
}

export default function StatePage(): JSX.Element {
  return (
    <div className="space-y-4">
      <Counter1 />
      <Counter2 />
      <Clock />
    </div>
  )
}
