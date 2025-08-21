import { createFileRoute } from '@tanstack/react-router'

/**
 * 关于页面路由配置
 * 定义 '/about' 路径对应的路由组件
 */
export const Route = createFileRoute('/about')({
  component: About,
})

/**
 * 关于页面组件
 * 显示应用的相关信息
 */
function About() {
  return <div className="p-2">Hello from About!</div>
}