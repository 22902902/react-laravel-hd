import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from '../routeTree.gen'
import { useAuth } from './useAuth'

// Create a new router instance
const router = createRouter({ 
    routeTree,
    context: {
        auth: undefined!
    }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const userAppRouter = () => {
    const auth = useAuth() // 得到数据
    const AppRouterProvider = () => <RouterProvider router={router} context={ {auth} } />
    return {
        AppRouterProvider
    }
}