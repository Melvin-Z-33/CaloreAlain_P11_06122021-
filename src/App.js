import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Housings from './pages/Housings';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/accommodation/:id" element={<Housings />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
