import React from 'react'
import RandomMovie from './Components/RandomMovie'
import Header from './Components/Header'
import Movies from './Components/Movies'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<RandomMovie />
			<Movies />
		</>
	)
}

export default App
