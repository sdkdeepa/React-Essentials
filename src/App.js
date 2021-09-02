import React from 'react'
import './App.css'
// import restaurant from './restaurant.jpg'

//all components are functions and they all return UI
function Header(props) {
	return (
		<header>
			<h1>{props.name}'s Kitchen </h1>
		</header>
	)
}

function Main(props) {
	return (
		<section>
			<p> I make the best and {props.adjective} food in the continent</p>
			<img src={'https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_960_720.jpg'}
				 height={200}
				 alt='Restuarant food display'
			/>
			<ul style={{ textAlign: 'left' }}>
				{props.dishes.map((dish) => (
					<li key={dish.id}>{dish.title}</li>
				))}
			</ul>
		</section>
	)
}

function Footer(props) {
	return (
		<footer>
			<p> Copyright {props.year}</p>
		</footer>
	)
}

const dishes = ['Dosa', 'Idli', 'Pani Poori', 'Vada Pav']

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }))
console.log(dishObjects)

function App() {
	return (
		<div className='App'>
			<Header name='Deepa' />
			<Main adjective='authentic' dishes={dishObjects} />
			<Footer year={new Date().getFullYear()} />
		</div>
	)
}

export default App
