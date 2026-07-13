import { lazy, type ReactNode } from 'react'
import {
  HomeOutlined,
  ReadOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from '@ant-design/icons'

// 路由级懒加载：首次访问对应路由时才下载 chunk（需配合布局里的 Suspense）
const HomePage = lazy(() => import('@/pages/HomePage'))
const NewsList = lazy(() => import('@/pages/NewsList'))
const UserPage = lazy(() => import('@/pages/UserPage'))
const UserList = lazy(() => import('@/pages/UserList'))
const CallbackMemoPage = lazy(() => import('@/pages/CallbackMemoPage'))
const JSX = lazy(() => import('@/pages/JSX'))
const Zujian = lazy(() => import('@/pages/Zujian'))
const StatePage = lazy(() => import('@/pages/StatePage'))

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
  {
    path: 'callback-memo',
    label: 'Callback & Memo',
    icon: <ThunderboltOutlined />,
    element: <CallbackMemoPage />,
    showInMenu: true,
  },
  {
    path: 'jsx',
    label: 'JSX',
    icon: <ThunderboltOutlined />,
    element: <JSX />,
    showInMenu: true,
  },
  {
    path: 'zujian',
    label: '组件',
    icon: <ThunderboltOutlined />,
    element: <Zujian />,
    showInMenu: true,
  },
  {
    path: 'state',
    label: '组件状态',
    icon: <ThunderboltOutlined />,
    element: <StatePage />,
    showInMenu: true,
  },
]

export const getRouteMenuPath = (route: AppRoute) => {
  if (route.index) return '/'
  return `/${route.path}`
}
