import React from 'react'
import './App.css'

function Header(props) {
	console.log(props)
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
      <ul style={{ textAlign:'left'}}>
        {props.dishes.map((dish) => (<li> {dish}</li>
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

const dishes = [
  "Dosa",
  "Idli",
  "Pani Poori",
]



function App() {
	return (
		<div className='App'>
			<Header name='Deepa' />
			<Main adjective='authentic' dishes={dishes}/>
			<Footer year={new Date().getFullYear()} />
		</div>
	)
}

export default App
