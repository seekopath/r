import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import firebase from '../firebase';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Terms of use. '}
      <Link color="inherit" href="https://material-ui.com/">
        Privacy Policy
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}


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
	  },
	  avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	  },
	  form: {
		width: '60%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	  },
	  submitt: {
		margin: theme.spacing(3, 0, 2),
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		color: "white",
		backgroundColor: "#43425D",
	  },
	  submit: {
		margin: theme.spacing(3, 0, 2),
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		color: "#43425D",
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
		// width: '360px',
		height: '25px',
		objectFit: 'contain',
		opacity: '0.5',
		fontFamily:' Avenir',
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
		marginTop: theme.spacing(1),
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
		  <ArrowBackIosIcon color="primary" style={{alignSelf: 'end'}} onClick={e => props.history.replace('/')} />
		  <img src="assets/logo.png"

				// srcset="assets/logo1.png 2x,

				// 		assets/logo2.png 3x"

				className={classes.allas_logo_Rityta} ></img>
			<Typography className={classes.desc} >
			Enter your email and we send you a password reset link.
			</Typography>
			<form className={classes.form} onSubmit={e => e.preventDefault() && false }>
			  <TextField
				margin="normal"
				fullWidth
				id="email"
				label="Email"
				name="email"
				autoComplete="email"
				autoFocus
				value={email}
				onChange={e => setEmail(e.target.value)} 
			  />
			  
			

			<Grid container className={classes.buttons}>
              <Grid item md={12} sm={12} container style={{padding: '0 20%',}}>
					<Button
					type="submit"
					fullWidth
					variant="contained"
					className={classes.submitt}
					size="large"
					onClick={login}
					>
					Send Request
					</Button>
              </Grid>
              
            </Grid>
			  
			</form>
		  </div>
          <Box mt={20}>
              <Copyright />
          </Box>
		</Grid>
	  </Grid>

	)

	async function login() {
		try {
			await firebase.forgot(email)
			// props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(withStyles(styles)(SignIn))

