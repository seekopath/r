import React, { useState, useEffect } from 'react'
import './styles.css'
import HomePage from '../HomePage'
import Login from '../Login'
import Forgot from '../Forgotpassword'
import Register from '../Register'
import Dashboard from '../Dashboard'
import Chart from '../Dashboard/Chart'
import Counting from '../Dashboard/counting'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'

const theme = createMuiTheme()

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
					<Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/forgotpassword" component={Forgot} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/counting" component={Counting} />
					<Route exact path="/chart" component={Chart} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}