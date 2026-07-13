import { Suspense, type CSSProperties, type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import SideMenuBar from './components/SideMenuBar'

const { Header, Sider, Content, Footer } = Layout

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}

const contentStyle: CSSProperties = {
  minHeight: '100%',
  overflowY: 'scroll',
  padding: '1rem',
  textAlign: 'center',
  color: '#333',
}

const siderStyle: CSSProperties = {
  width: 240,
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#1677ff',
}

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

const layoutStyle: CSSProperties = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  height: '100%',
}

const AppLayout: FC = () => (
  <Layout style={layoutStyle}>
    <Sider style={siderStyle}>
      <div className="h-16 text-white">React Project</div>
      <SideMenuBar />
    </Sider>

    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center py-16">
              <Spin size="large" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
)

export default AppLayout
