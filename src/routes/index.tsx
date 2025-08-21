import { createFileRoute } from '@tanstack/react-router'

/**
 * 首页路由配置
 * 定义根路径 '/' 对应的路由组件
 */
export const Route = createFileRoute('/')({  component: Index,
})

/**
 * 首页组件
 * 应用的主页面，显示欢迎信息
 */
function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}