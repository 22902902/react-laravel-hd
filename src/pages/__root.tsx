import type { IUserAuth } from '@/hooks/useAuth';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

/**
 * 路由上下文接口定义
 * 定义在整个路由系统中可用的上下文数据类型
 */
interface RouterContext {
    auth: IUserAuth; // 用户认证状态和相关方法
}

/**
 * 根路由组件
 * 作为整个应用的路由容器，提供:
 * 1. 全局导航栏
 * 2. 路由出口（Outlet）用于渲染子路由
 * 3. 开发工具（仅开发环境）
 * 4. 用户认证上下文传递
 */
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      {/* 全局导航栏 */}
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      
      {/* 分隔线 */}
      <hr />
      
      {/* 路由出口 - 子路由组件将在这里渲染 */}
      <Outlet />
      
      {/* TanStack Router开发工具 - 仅在开发环境显示 */}
      <TanStackRouterDevtools />
    </>
  ),
})