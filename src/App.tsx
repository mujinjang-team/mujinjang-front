import React from 'react'
import Router from './routes/Router'
import Reset from '@/styles/reset'
import Normalize from '@/styles/normalize'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: 2,
			},
		},
	})

	return (
		<QueryClientProvider client={queryClient}>
			<Reset />
			<Normalize />
			<div className="App">
				<Router />
			</div>
		</QueryClientProvider>
	)
}

export default App
