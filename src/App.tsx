import { useAppQuery } from './hooks/useAppQuery';
import { userAppRouter } from './hooks/useAppRouter'
import { useGetUserInfoQuery } from './services/user';

function App() {
  const {AppQueryProvider} = useAppQuery();
  return <AppQueryProvider>
    <InItData />
    </AppQueryProvider >
}


// 再写个组件
function InItData() {
  const {isPending, isError, error, data} = useGetUserInfoQuery();
  const { AppRouterProvider } = userAppRouter();
  if (isPending) return <div>loading.....</div>
  if (isError) return <div>{JSON.stringify(error)}</div>
  console.log(data);
  return <AppRouterProvider />
}
export default App
