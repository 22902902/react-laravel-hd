import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import type { ReactNode } from 'react'

// Create a client
const queryClient = new QueryClient()

export const useAppQuery = () => {
   
    // Provide the client to your App
    const AppQueryProvider = ({children} : {children: ReactNode}) => <QueryClientProvider client={queryClient}>
      {/* <Todos /> */}
      {children}
    </QueryClientProvider>

    return {AppQueryProvider}
}