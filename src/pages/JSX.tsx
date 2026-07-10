// 中文：JSX（JavaScript XML）允许我们在 JavaScript 中编写 HTML 元素，并将它们放置在 DOM 中，
// 而无需使用 createElement() 和/或 appendChild() 方法。
import React, { type JSX } from 'react'

// 语法规则
// 1. JSX 标签必须闭合。
// 2. class 属性必须写成 className。因为 class 是 JavaScript 的保留字。
// 3. for 属性必须写成 htmlFor。因为 for 是 JavaScript 的保留字。
// 4. 自定义组件的首字母必须大写。因为小写字母开头的标签会被认为是 HTML 标签。
// 5. 注释用 {/* */} 包裹。
// 6. 只能有一个根元素。因为 JSX 只能返回一个元素。<></> 可以用来包裹多个元素。

// 表达式嵌入、条件渲染、列表渲染

// 1. 表达式嵌入：可以在 JSX 中嵌入任何 JavaScript 表达式，使用 {} 包裹。
function BiaoDaShiQianRu(): JSX.Element {
  return (
    <div>
      <h1>表达式嵌入</h1>
      <p>1 + 1 = {1 + 1}</p>
      <p>{`Hello, ${'World'}!`}</p>
      <p>{true ? '条件为真' : '条件为假'}</p>
    </div>
  )
}

// 2. 条件渲染：可以使用 if 语句、三元运算符、逻辑与运算符等方式进行条件渲染。
function TiaoJianXuanRan(): JSX.Element {
  const isLoggedIn = true
  return (
    <div>
      <h1>条件渲染</h1>
      {isLoggedIn ? <p>欢迎回来！</p> : <p>请登录。</p>}
    </div>
  )
}

// 3. 列表渲染：可以使用 map() 方法对数组进行遍历，生成 JSX 元素。
function LieBiaoXuanRan(): JSX.Element {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>列表渲染</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  )
}
