import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Route exact path='/' component={Home} />
			<Route path='/resume' component={Resume} />
			<Route path='/projects' component={Portfolio} />
			<Route path='/contacts' component={Contacts} />
		</>
	)
}

export default App
