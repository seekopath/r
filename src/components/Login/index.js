import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import firebase from '../firebase'

const styles = theme => ({
	root: {
		height: '100vh',
	  },
	  image: {
		backgroundImage: 'url(assets/image.png)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
		  theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		// backgroundPosition: 'center',
		objectFit:'contain'
	  },
	  paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent:'center',
		marginTop:'25vh'
	  },
	  avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	  },
	  form: {
		width: '70%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	  },
	  submitt: {
		margin: theme.spacing(3, 0, 2),
		marginRight: theme.spacing(3),
		padding:"1.5rem",
		color: "white",
		backgroundColor: "#43425D",
	  },
	  submit: {
		margin: theme.spacing(3, 0, 2),
		marginLeft: theme.spacing(3),
		color: "#43425D",
		padding:"1.5rem",
	  },
	  logo: {
		  width:'20%',
	  },
	  formhead: {
		  color: '#4d4f5c',
		  marginTop: theme.spacing(5),
		  marginBottom: theme.spacing(4),
		  fontSize:'1.3 rem'
	  },
	  bottomhead: {
		color: '#4d4f5c',
		marginTop: theme.spacing(3),
		// marginBottom: theme.spacing(2),
	  },
	  allas_logo_Rityta : {

		width: '161px',
	  
		height: '72px',
	  
		objectFit: 'contain'
	  
	  },
	  desc :{
		  marginTop:'15px',
		width: '360px',
		height: '25px',
		objectFit: 'contain',
		opacity: '0.5',
		fontSize: '18px',
		fontWeight: 'normal',
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: '0.72',
		letterSpacing: 'normal',
		textAlign: 'center',
		color: '#4d4f5c',
	  },
	  forgot :{
		  padding : '10px',
		  textAlign : 'right'
	  },
	  buttons :{
		marginTop: theme.spacing(5),
	  }
});

function SignIn(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
	
		<Grid container component="main" className={classes.root}>
		<CssBaseline />
		<Grid item xs={false} sm={6} md={6} className={classes.image} />
		<Grid item xs={12} sm={6} md={6} component={Paper} square>
		  <div className={classes.paper}>
		  <img src="assets/logo.png"

				// srcset="assets/logo1.png 2x,

				// 		assets/logo2.png 3x"

				className={classes.allas_logo_Rityta} ></img>
			<Typography className={classes.desc} style={{fontFamily: "Avenir"}} >
			Welcome back! 
			<Typography className = {classes.next} style={{fontFamily: "Avenir"}}>Please login to your account.</Typography>
			</Typography>
			<form className={classes.form} onSubmit={e => e.preventDefault() && false } style={{padding:"3%"}}>
			  <TextField
				margin="normal"
				fullWidth
				id="email"
				label="Username"
				name="email"
				autoComplete="email"
				autoFocus
				value={email}
				onChange={e => setEmail(e.target.value)} 
			  />
			  <TextField
				margin="normal"
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			  />
			  
			<Grid container className={classes.bottomhead} style={{justifyContent:"space-between"}} >
              <Grid item md={6} style = {{justifyContent:"flex-start",marginLeft:"-10px"}} className="test" >
				<FormControlLabel
				 control={<Checkbox value="remember" color="primary" />}
				label="Remember me"
				/>
              </Grid>
              <Grid item md={6} className={classes.forgot} >
                <Link href="#" to='/forgotpassword' style={{textDecoration:'none'}}>
                  Forgot password
                </Link>
              </Grid>
            </Grid>

			<Grid container className={classes.buttons}>
              <Grid item md={6} sm={6} container>
					<Button
					type="submit"
					fullWidth
					variant="contained"
					className={classes.submitt}
					size="large"
					onClick={login}
					>
					Login
					</Button>
              </Grid>
              <Grid item md={6} sm={6} container>
					<Button
					type="submit"
					fullWidth
					size="large"
					variant="outlined"
					className={classes.submit}
					component={Link}
					to="/register"
					>
					Sign up
					</Button>
              </Grid>
            </Grid>
			  
			</form>
		  </div>
		</Grid>
	  </Grid>

	)

	async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(withStyles(styles)(SignIn))


// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(assets/image.png)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
// 	// backgroundPosition: 'center',
// 	objectFit:'contain'
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '70%', // Fix IE 11 issue.
// 	marginTop: theme.spacing(1),
//   },
//   submitt: {
// 	margin: theme.spacing(3, 0, 2),
// 	marginLeft: theme.spacing(1),
// 	marginRight: theme.spacing(1),
// 	color: "white",
// 	backgroundColor: "#43425D",
//   },
//   submit: {
// 	margin: theme.spacing(3, 0, 2),
// 	marginLeft: theme.spacing(1),
// 	marginRight: theme.spacing(1),
// 	color: "#43425D",
//   },
//   logo: {
// 	  width:'20%',
//   },
//   formhead: {
// 	  color: '#4d4f5c',
// 	  marginTop: theme.spacing(5),
// 	  marginBottom: theme.spacing(4),
//   },
//   bottomhead: {
// 	color: '#4d4f5c',
// 	marginTop: theme.spacing(5),
// 	// marginBottom: theme.spacing(2),
//   }
  
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   return (
    
//   );
// }