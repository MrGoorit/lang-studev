import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import SideMenuBar from './components/SideMenuBar'

const { Header, Sider, Content, Footer } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}

const contentStyle: React.CSSProperties = {
  minHeight: '100%',
  overflowY: 'scroll',
  padding: '1rem',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '"#0958d9',
}

const siderStyle: React.CSSProperties = {
  width: 240,
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#1677ff',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  height: '100%',
}

const App: React.FC = () => (
  <Layout style={layoutStyle}>
    <Sider style={siderStyle}>
      <div className="h-16 text-white">React Project</div>
      <SideMenuBar />
    </Sider>

    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
)

export default App
