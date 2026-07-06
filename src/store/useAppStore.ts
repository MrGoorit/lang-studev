import { create } from 'zustand'

// 定义状态和方法的接口
interface AppState {
    siderCollapsed: boolean
    toggleSider: () => void
}

// 创建 Store
export const useAppStore = create<AppState>((set) => ({
    siderCollapsed: false,
    toggleSider: () => set((state) => ({ siderCollapsed: !state.siderCollapsed })),
}))