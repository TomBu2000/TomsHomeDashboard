"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import { Dashboard } from "./dashboard/Dashboard"

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard></Dashboard>
    </QueryClientProvider>
  )
}
