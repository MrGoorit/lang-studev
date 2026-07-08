import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/style/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 窗口重新聚焦时不自动重新请求
      retry: 1, // 失败重试一次
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
