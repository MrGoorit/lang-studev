import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { getRouteMenuPath, layoutRoutes } from '@/router/routes'

const SideMenuBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = useMemo<MenuProps['items']>(
    () =>
      layoutRoutes
        .filter((route) => route.showInMenu)
        .map((route) => ({
          key: getRouteMenuPath(route),
          icon: route.icon,
          label: route.label,
        })),
    []
  )

  const selectedKeys = useMemo(() => [location.pathname], [location.pathname])

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      items={menuItems}
      onClick={handleMenuClick}
      style={{ borderInlineEnd: 0 }}
    />
  )
}

export default SideMenuBar
