import { Component, useState, type ReactNode } from 'react'
import type { JSX } from 'react'
import { Button, Card, Space, Typography } from 'antd'

const { Title, Paragraph, Text } = Typography

// ========== 1. 基础 props ==========
interface GreetingProps {
  name: string
}

function Greeting({ name }: GreetingProps): JSX.Element {
  return <div>你好，{name}</div>
}

// ========== 2. 可选 props + 默认值 ==========
interface BadgeProps {
  text: string
  color?: string // 可选
}

function Badge({ text, color = '#1677ff' }: BadgeProps): JSX.Element {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 4,
        color: '#fff',
        backgroundColor: color,
      }}
    >
      {text}
    </span>
  )
}

// ========== 3. children：父组件往标签中间塞内容 ==========
interface PanelProps {
  title: string
  children: ReactNode
}

function Panel({ title, children }: PanelProps): JSX.Element {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, textAlign: 'left' }}>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

// ========== 4. 回调 props：子 → 父传数据 / 通知父组件 ==========
interface CounterButtonProps {
  label: string
  onIncrement: (step: number) => void
}

function CounterButton({ label, onIncrement }: CounterButtonProps): JSX.Element {
  return (
    <Button type="primary" onClick={() => onIncrement(1)}>
      {label}
    </Button>
  )
}

// ========== 5. 类组件接收 props ==========
interface UserCardProps {
  name: string
  age: number
}

class UserCard extends Component<UserCardProps> {
  render(): JSX.Element {
    const { name, age } = this.props
    return (
      <div>
        用户：{name}，年龄：{age}
      </div>
    )
  }
}

// ========== 6. 把对象展开成 props ==========
interface ProfileProps {
  name: string
  role: string
}

function Profile({ name, role }: ProfileProps): JSX.Element {
  return (
    <div>
      {name} · {role}
    </div>
  )
}

export default function PropsPage(): JSX.Element {
  const [total, setTotal] = useState(0)

  const user = {
    name: 'Alice',
    role: 'Frontend',
  }

  return (
    <div className="space-y-4 p-4 text-left">
      <Title level={3}>Props 学习示例</Title>
      <Paragraph type="secondary">
        props 是父组件传给子组件的只读数据。TypeScript 用 interface 声明类型即可，不必再用
        prop-types。
      </Paragraph>

      <Card title="1. 基础 props" size="small">
        <Greeting name="张三" />
        <Text type="secondary">父组件：{`<Greeting name="张三" />`}</Text>
      </Card>

      <Card title="2. 可选 props + 默认值" size="small">
        <Space>
          <Badge text="默认蓝色" />
          <Badge text="自定义红色" color="#f5222d" />
        </Space>
      </Card>

      <Card title="3. children" size="small">
        <Panel title="面板标题">
          <p>这里是 children，可以是文本、标签，甚至别的组件。</p>
          <Badge text="嵌套组件" />
        </Panel>
      </Card>

      <Card title="4. 回调 props（子通知父）" size="small">
        <Space>
          <Text>当前合计：{total}</Text>
          <CounterButton label="+1" onIncrement={(step) => setTotal((value) => value + step)} />
        </Space>
        <Paragraph type="secondary" className="!mb-0 !mt-2">
          子组件不直接改父 state，而是调用父传来的函数。
        </Paragraph>
      </Card>

      <Card title="5. 类组件 this.props" size="small">
        <UserCard name="Bob" age={28} />
      </Card>

      <Card title="6. 展开对象为 props" size="small">
        {/* 等价于 <Profile name="Alice" role="Frontend" /> */}
        <Profile {...user} />
      </Card>
    </div>
  )
}
