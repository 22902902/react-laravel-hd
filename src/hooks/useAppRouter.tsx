// 导入TanStack Router相关组件和函数
import { RouterProvider, createRouter } from '@tanstack/react-router'

// 导入自动生成的路由树配置
import { routeTree } from '../routeTree.gen'
import { useAuth } from './useAuth'

/**
 * 创建路由器实例
 * 配置路由树和上下文类型，为路由组件提供认证状态
 */
const router = createRouter({ 
    routeTree, // 使用自动生成的路由树
    context: {
        auth: undefined! // 定义认证上下文的类型，实际值在运行时提供
    }
})

/**
 * 注册路由器实例以获得类型安全
 * 这样TypeScript可以在整个应用中正确推断路由类型
 */
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

/**
 * 路由配置Hook
 * 提供带有认证上下文的路由Provider组件
 * 
 * @returns {Object} 包含AppRouterProvider组件的对象
 */
export const useAppRouter = () => {
    // 获取用户认证状态和相关方法
    const auth = useAuth()
    
    /**
     * 路由Provider组件
     * 为整个应用提供路由功能，并将认证状态传递给所有路由组件
     */
    const AppRouterProvider = () => <RouterProvider router={router} context={ {auth} } />
    
    return {
        AppRouterProvider
    }
}