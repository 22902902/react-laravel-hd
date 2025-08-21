// 导入自定义hooks和服务
import { useAppQuery } from './hooks/useAppQuery';
import { useAppRouter } from './hooks/useAppRouter'
import { useGetUserInfoQuery } from './services/user';

/**
 * 应用程序根组件
 * 负责设置全局的React Query Provider，为整个应用提供数据获取和缓存功能
 */
function App() {
  // 获取React Query Provider组件
  const {AppQueryProvider} = useAppQuery();
  
  // 使用Provider包装应用，提供全局数据管理能力
  return <AppQueryProvider>
    <InItData />
    </AppQueryProvider >
}

/**
 * 数据初始化组件
 * 负责在应用启动时获取用户信息，并根据数据加载状态渲染相应的UI
 * 只有在用户数据加载完成后才会渲染路由组件
 */
function InItData() {
  // 获取用户信息查询的状态和数据
  const {isPending, isError, error, data} = useGetUserInfoQuery();
  // 获取路由Provider组件
  const { AppRouterProvider } = useAppRouter();
  
  // 数据加载中状态
  if (isPending) return <div>loading.....</div>
  
  // 数据加载错误状态
  if (isError) return <div>{JSON.stringify(error)}</div>
  
  // 打印用户数据用于调试
  console.log(data);
  
  // 数据加载成功，渲染路由组件
  return <AppRouterProvider />
}

export default App
