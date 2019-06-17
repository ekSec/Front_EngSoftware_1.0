import React, { useState, useEffect } from 'react'
import './styles.css'
import Gerenciador from '../Gerenciador'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'
import Recurso from '../Gerenciador/Recurso';
const theme = createMuiTheme({
	typography: {
	  useNextVariants: true,
	},
	});
	

export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})
	return firebaseInitialized !== false ? (
			<Router>
			<div>
			<Route path="/" component={Gerenciador}/>
			</div>
			</Router>
	) : <div id="loader"><CircularProgress /></div>
}
