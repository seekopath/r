// import React, { useState } from 'react'
// import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
// import withStyles from '@material-ui/core/styles/withStyles'
// import { Link, withRouter } from 'react-router-dom'
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import firebase from '../firebase'
// const styles = theme => ({
// 	root: {
// 		height: '100vh',
// 	  },
// 	  image: {
// 		backgroundImage: 'url(https://source.unsplash.com/random)',
// 		backgroundRepeat: 'no-repeat',
// 		backgroundColor:
// 		  theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
// 		backgroundSize: 'cover',
// 		backgroundPosition: 'center',
// 	  },
// 	  paper: {
// 		margin: theme.spacing(8, 4),
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 	  },
// 	  avatar: {
// 		margin: theme.spacing(1),
// 		backgroundColor: theme.palette.secondary.main,
// 	  },
// 	  form: {
// 		width: '100%', // Fix IE 11 issue.
// 		marginTop: theme.spacing(1),
// 	  },
// 	  submit: {
// 		margin: theme.spacing(3, 0, 2),
// 	  },
// })
// // function Copyright() {
// // 		return (
// // 		  <Typography variant="body2" color="textSecondary" align="center">
// // 			{'Copyright © '}export default function Register() {
// // 		const classes = useStyles();
	  
// // 		  </Typography>
// // 		);
// // 	  }
// function Register(props) {
// 	const { classes } = props

//     const [name, setName] = useState('')
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')
    

// 	return (
// 		<Grid container component="main" className={classes.root}>
// 		<CssBaseline />
// 		<Grid item xs={false} sm={4} md={7} className={classes.image} />
// 		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
// 		  <div className={classes.paper}>
// 			<Avatar className={classes.avatar}>
// 			  <LockOutlinedIcon />
// 			</Avatar>
// 			<Typography component="h1" variant="h5">
// 			  Register
// 			</Typography>
// 			<form className={classes.form} onSubmit={e => e.preventDefault() && false }>
// 			  <TextField
// 				variant="outlined"
// 				margin="normal"
// 				required
// 				fullWidth
// 				id="name"
// 				label="Email Address"
// 				autoComplete="email"
// 				autoFocus
// 				value={name} onChange={e => setName(e.target.value)}
// 			  />
// 			  <TextField
// 				variant="outlined"
// 				margin="normal"
// 				required
// 				fullWidth
// 				id="email"
// 				label="Email Address"
// 				autoComplete="email"
// 				autoFocus
// 				value={email} onChange={e => setEmail(e.target.value)}
// 			  />
// 			  <TextField
// 				variant="outlined"
// 				margin="normal"
// 				required
// 				fullWidth
// 				name="password"
// 				label="Password"
// 				type="password"
// 				id="password"
// 				autoComplete="current-password"
// 				value={password} onChange={e => setPassword(e.target.value)}
// 			  />
// 			  <FormControlLabel
// 				control={<Checkbox value="remember" color="primary" />}
// 				label="Remember me"
// 			  />
// 			  <Button
// 				type="submit"
// 				fullWidth
// 				variant="contained"
// 				color="primary"
// 				onClick={onRegister}
// 				className={classes.submit}
// 			  >
// 				Register
// 			  </Button>
// 			  <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             {/* <Box mt={5}>
//               <Copyright />
// 			</Box>	 */}
// 			</form>
// 		  </div>
// 		</Grid>
// 	  </Grid>
// 	)
// 		async function onRegister() {
// 			try {
// 				await firebase.register(name, email, password)
// 				props.history.replace('/dashboard')
// 			} catch(error) {
// 				alert(error.message)
// 			}
// 		}

		
	
// }

// export default withRouter(withStyles(styles)(Register))

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

function SignUp(props) {
	const { classes } = props

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={6} className={classes.image} />
      <Grid item xs={12} sm={6} md={6} component={Paper} square>
        <div className={classes.paper}>
          <img
            src="assets/logo.png"
            // srcset="assets/logo1.png 2x,

            // 		assets/logo2.png 3x"

            className={classes.allas_logo_Rityta}
          ></img>
          <Typography className={classes.desc}>
            Please complete to your account.
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => e.preventDefault() && false}
          >
            <Grid container>
              <Grid item container sm={5} md={5}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="firstname"
                  label="Firstname"
                  name="firstname"
                  autoComplete="firstname"
                  autoFocus
				  container
                />
              </Grid>
			  <Grid item>
				  <Box mr={8}></Box>
			  </Grid>

              <Grid item container sm={5} md={5}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="lastname"
                  label="Lastname"
                  type="text"
                  id="lastname"
				  container
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              fullWidth
              name="name"
              label="Username"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="confirmpassword"
            />

            <Grid container className={classes.bottomhead} >
              <Grid item md={12} style={{marginLeft:"-10px"}}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="I agree with terms and conditions"
                />
              </Grid>
              
            </Grid>

            <Grid container className={classes.buttons}>
              <Grid item md={12} sm={12} container style={{padding: '0 20%',}}	>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submitt}
                  size="large"
                  onClick={onRegister}
                >
                  Sign Up
                </Button>
              </Grid>
			  <Grid item md={12} sm={12} >
				<Typography className={classes.desc}>
					<Link color="none" to="/login">
						Already have an account ? Sign in.
					</Link>
				</Typography>
			  </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );

  async function onRegister() {
			try {
				await firebase.register(name, email, password)
				props.history.replace('/dashboard')
			} catch(error) {
				alert(error.message)
			}
		}
}

export default withRouter(withStyles(styles)(SignUp))
