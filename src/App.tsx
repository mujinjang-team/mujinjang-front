import React from 'react'
import Router from './routes/Router'
import Reset from '@/styles/reset'
import Normalize from '@/styles/normalize'

function App() {
	return (
		<>
			<Reset />
			<Normalize />
			<div className="App">
				<Router />
			</div>
		</>
	)
}

export default App
