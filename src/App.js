import React from 'react';
import './App.css';

function Header() {
  return(
    <header>
     <h1>Deepa's Kitchen </h1>
    </header>
  )
}
function Main() {
  return (
		<section>
			<p> I make the best and delicious food in the continent</p>
		</section>
	)
}

function Footer() {
  return (
		<footer>
			<p> Ask anyone who have tested my food!</p>
		</footer>
	)
}
function App() {
  return (
    <div className="App"> 
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
