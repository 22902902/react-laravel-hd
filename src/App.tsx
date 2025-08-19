import { userAppRouter } from './hooks/useAppRouter'

function App() {
  const { AppRouterProvider } = userAppRouter();
  return <AppRouterProvider />
}

export default App
