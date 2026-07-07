import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { List, Card, Button } from 'antd'
import UserApi from '@/api/user'

const UserList = () => {
  const [page, setPage] = useState<number>(1)
  const [count, setCount] = useState<number>(0)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', page],
    queryFn: () => UserApi.getUsers(page),
  })

  const handlePlus = () => {
    setCount((num) => num + 1)
    setCount((num) => num + 1)
    setCount((num) => num + 1)
    setCount((num) => num + 1)
    setCount((num) => num + 1)
    setCount((num) => num + 1)
    setCount((num) => num + 1)
    setCount((num) => num + 1)
    setCount((num) => num + 1)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">用户管理列表</h2>
        <Button type="primary" onClick={() => setPage((p) => p + 1)}>
          模拟翻页
        </Button>
        <Button type="default" onClick={handlePlus}>
          增加{count}
        </Button>
      </div>

      {isLoading && <div className="text-center text-gray-500">加载中...</div>}

      {isError && <div className="text-center text-red-500">加载失败</div>}

      {data && (
        <List
          dataSource={data.data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.first_name + ' ' + item.last_name}>
                <div className="flex items-center">
                  <img src={item.avatar} alt={item.first_name} className="w-10 h-10 rounded-full" />
                </div>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  )
}

export default UserList
