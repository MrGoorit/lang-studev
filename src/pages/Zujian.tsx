// 组件
import React, { Component } from 'react'
import type { JSX } from 'react'

// 1. 函数声明
interface NameComProps {
  name: string
}

function NameCom(props: NameComProps): JSX.Element {
  return <div>Name: {props.name}</div>
}

// 2. 箭头函数
interface AgeComProps {
  age: string | number
}

const AgeCom = (props: AgeComProps): JSX.Element => {
  return <div>Age: {props.age}</div>
}

// 3. 类组件：第一个泛型是 Props，第二个是 State（可选）
interface SexComProps {
  sex: string
}

class SexCom extends Component<SexComProps> {
  render(): JSX.Element {
    return <div>Sex: {this.props.sex}</div>
  }
}

export default function Zujian(): JSX.Element {
  return (
    <div>
      <NameCom name="John" />
      <AgeCom age="20" />
      <SexCom sex="male" />
    </div>
  )
}
