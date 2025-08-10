import React from 'react'
import { movies } from '../data/movies'
import './Movies.scss'

const Movies: React.FC = () => {
	return (
		<section id='movies'>
			<div className='container'>
				<div className='movies'>
					{movies.map((movie, index) => (
						<div className='movies--card' key={index}>
							<img src={movie.image} alt={movie.title} />
							<h3>{movie.title}</h3>
							<p>
								{movie.description.length > 10
									? movie.description.slice(0, 90)
									: null}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Movies
