import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import NewsApi from '@/api/news'
import { Card, List, Button } from 'antd'

const NewsList = () => {
  // useState 管理局部 UI 状态
  const [page, setPage] = useState(1)

  //
  const { data, isLoading, isError } = useQuery({
    queryKey: ['newsList', page],
    queryFn: () => NewsApi.posts(),
  })

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">文章列表</h2>
        <Button type="primary" onClick={() => setPage(page + 1)}>
          模拟翻页
        </Button>
      </div>

      {/* 加载状态 */}
      {isLoading && <div className="text-center">加载中...</div>}

      {/* 错误状态 */}
      {isError && <div className="text-center">加载失败</div>}

      {/* 数据状态, 列表渲染，使用 map 渲染列表项 */}
      {data && (
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={data.data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>{item.body}</Card>
            </List.Item>
          )}
        />
      )}
    </div>
  )
}

export default NewsList
