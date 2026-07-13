// state 组件状态
import { Component } from 'react'
import type { JSX } from 'react'

// Props（没有就写空对象）
interface CounterProps {}

// State：声明状态结构
interface CounterState {
  count: number
}

// Component<Props, State>
class Counter extends Component<CounterProps, CounterState> {
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
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default Counter
