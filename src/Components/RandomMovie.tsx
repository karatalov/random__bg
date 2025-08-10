import React, { useEffect, useState } from 'react'
import { movies, type Movie } from '../data/movies'
import './RandomMovie.scss'

const RandomMovie: React.FC = () => {
	const [movie, setMovie] = useState<Movie | null>(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [showFullText, setShowFullText] = useState(false)

	const truncateText = (text: string, wordLimit: number) => {
		const words = text.split(' ')
		if (words.length <= wordLimit) return text
		return words.slice(0, wordLimit).join(' ') + '...'
	}

	useEffect(() => {
		const index = Math.floor(Math.random() * movies.length)
		setMovie(movies[index])
		setTimeout(() => setIsLoaded(true), 100)
	}, [])
	return (
		<section
			style={{
				backgroundImage: movie
					? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${movie.image})`
					: 'none',
				opacity: isLoaded ? 1 : 0,
				transition: 'opacity 1s ease-in-out',
				color: '#fff',
				padding: '50px 0',
			}}
			id='hero'
		>
			<div className='container'>
				{movie && (
					<div className='hero'>
						<div className='hero--img'>
							<img src={movie.image} alt='movie' />
						</div>
						<div className='hero--content'>
							<h2>{movie.title}</h2>
							<p>
								{showFullText
									? movie.description
									: truncateText(movie.description, 30)}
							</p>
							{movie.description.split(' ').length > 30 && (
								<button
									onClick={() => setShowFullText(!showFullText)}
									style={{
										background: 'transparent',
										border: 'none',
										color: 'yellow',
										cursor: 'pointer',
										fontSize: '14px',
										padding: 0,
									}}
								>
									{showFullText ? 'Скрыть' : 'Показать больше'}
								</button>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default RandomMovie
