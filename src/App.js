import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
