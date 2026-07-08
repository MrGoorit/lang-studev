import { HomeOutlined, ReadOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import type { ReactNode } from 'react'
import HomePage from '@/pages/HomePage'
import UserPage from '@/pages/UserPage'
import NewsList from '@/pages/NewsList'
import UserList from '@/pages/UserList'

export interface AppRoute {
  path?: string
  index?: boolean
  label: string
  icon?: ReactNode
  element: ReactNode
  showInMenu?: boolean
}

export const layoutRoutes: AppRoute[] = [
  {
    index: true,
    label: '首页',
    icon: <HomeOutlined />,
    element: <HomePage />,
    showInMenu: true,
  },
  {
    path: 'news',
    label: '文章列表',
    icon: <ReadOutlined />,
    element: <NewsList />,
    showInMenu: true,
  },
  {
    path: 'user',
    label: '用户管理',
    icon: <UserOutlined />,
    element: <UserPage />,
    showInMenu: true,
  },
  {
    path: 'user-list',
    label: '用户列表',
    icon: <TeamOutlined />,
    element: <UserList />,
    showInMenu: true,
  },
]

export const getRouteMenuPath = (route: AppRoute) => {
  if (route.index) return '/'
  return `/${route.path}`
}
