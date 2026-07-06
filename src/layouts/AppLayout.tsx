import { Layout, Menu } from 'antd'
import { HomeOutlined, UserOutlined, FileOutlined } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useAppStore } from '@/store/useAppStore'

const { Sider, Header, Content } = Layout

const AppLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // 从 Store 中获取状态和切换方法
  const { siderCollapsed, toggleSider } = useAppStore()

  // 菜单配置
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/user',
      icon: <UserOutlined />,
      label: '用户管理',
    },
    {
      key: '/news',
      icon: <FileOutlined />,
      label: '文章列表',
    },
  ]

  return (
    <Layout className="h-screen">
      <Sider
        theme="light"
        className="shadow-sm"
        collapsible
        collapsed={siderCollapsed}
        onCollapse={toggleSider}
      >
        <div className="h-16 flex items-center justify-center fw-bold text-xl text-blue-500">
          React Study Project
        </div>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={(item) => navigate(item.key)}
          items={menuItems}
        />
      </Sider>

      <Header className="bg-white px-6 shadow-sm flex items-center">
        <span className="text-gray-500">React 项目实战学习</span>
      </Header>

      <Content className="p-6 m-4 bg-white rounded-lg overflow-auto">
        {/* 嵌套路由的出口 */}
        <Outlet />
      </Content>
    </Layout>
  )
}

export default AppLayout
