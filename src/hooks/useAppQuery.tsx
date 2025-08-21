// 导入TanStack Query相关的组件
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import type { ReactNode } from 'react'

/**
 * 创建全局的QueryClient实例
 * QueryClient负责管理查询缓存、重试逻辑、后台更新等功能
 */
const queryClient = new QueryClient()

/**
 * React Query配置Hook
 * 提供全局的数据获取和状态管理能力
 * 
 * @returns {Object} 包含AppQueryProvider组件的对象
 */
export const useAppQuery = () => {
   
    /**
     * React Query Provider组件
     * 为整个应用提供数据获取、缓存、同步和更新的能力
     * 
     * @param {Object} props - 组件属性
     * @param {ReactNode} props.children - 子组件
     */
    const AppQueryProvider = ({children} : {children: ReactNode}) => <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>

    return {AppQueryProvider}
}