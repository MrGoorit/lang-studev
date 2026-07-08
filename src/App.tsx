import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import router from './router'

function App() {
  return (
    // 全局UI配置
    <ConfigProvider locale={zhCN}>
      {/* 路由渲染 */}
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
