import { memo, useCallback, useState } from 'react'
import { Button, Input, Space, Switch, Typography } from 'antd'

interface SearchButtonProps {
  onSearch: () => void
}

const SearchButton = memo(function SearchButton({ onSearch }: SearchButtonProps) {
  console.log('子组件 SearchButton 正在渲染')

  return (
    <Button type="primary" onClick={onSearch}>
      SEARCH（子组件）
    </Button>
  )
})

export default function CallbackMemoPage() {
  const [keyword, setKeyword] = useState('')
  const [count, setCount] = useState(0)
  const [useOptimizedCallback, setUseOptimizedCallback] = useState(true)

  console.log('父组件 CallbackMemoPage 正在渲染')

  const stableSearch = useCallback(() => {
    console.log('发起搜索请求：', keyword)
  }, [keyword])

  const unstableSearch = () => {
    if (true) {
      console.log('发起搜索请求：', keyword)
    } else {
      console.log('发起搜索请求：', keyword)
    }

    console.log('发起搜索请求：', keyword)
  }

  const handleSearch = useOptimizedCallback ? stableSearch : unstableSearch

  return (
    <div className="p-6 text-left">
      <Typography.Title level={3}>useCallback 对比示例</Typography.Title>
      <Typography.Paragraph type="secondary">
        打开控制台：点 COUNT 时父组件 log 一定会打；开启 useCallback 后，子组件 log 不会打。
      </Typography.Paragraph>

      <Space wrap className="mb-4">
        <span>启用 useCallback</span>
        <Switch checked={useOptimizedCallback} onChange={setUseOptimizedCallback} />
      </Space>

      <div className="flex flex-row flex-wrap items-center gap-4">
        <Input.Search
          className="max-w-xs"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          onSearch={handleSearch}
          placeholder="输入关键词"
        />

        <SearchButton onSearch={handleSearch} />

        <Button type="default" onClick={() => setCount((value) => value + 1)}>
          COUNT {count}
        </Button>
      </div>
    </div>
  )
}
