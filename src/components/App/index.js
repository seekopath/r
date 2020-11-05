import React, { useState, useEffect } from 'react'
import './styles.css'
import HomePage from '../HomePage'
import Login from '../Login'
import Forgot from '../Forgotpassword'
import Register from '../Register'
import Dashboard from '../Dashboard'
import Settings from '../Settings'
import Chart from '../Dashboard/Chart'
import Counting from '../Dashboard/counting'
import Connectivity from '../Dashboard/connectivity'
import Environment from '../Dashboard/environment'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'
// import { Settings } from '@material-ui/icons'

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
					<Route exact path="/environment" component={Environment} />
					<Route exact path="/connectivity" component={Connectivity} />
					<Route exact path="/chart" component={Chart} />
					<Route exact path="/settings" component={Settings} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}