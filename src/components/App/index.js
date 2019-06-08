import React, { useState, useEffect } from 'react'
import './styles.css'
import Home from '../Login'
import Ctt from '../Ctt'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'
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
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
			<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/dashboard" component={Ctt}/>
			</Switch>
			</Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}