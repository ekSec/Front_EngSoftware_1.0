import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'


const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: '#126a15',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
		fontFamily:'Roboto'
	},
});
  
function SignIn(props) {
	const { classes } = props

	const [email, setEmail] = useState('')
	const [msgErro, setMsgErro] = useState('')
	const [password, setPassword] = useState('')

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5" style={{fontFamily:'Roboto'}}>
					Autentique-se
       			</Typography>
				<form className={classes.form} onSubmit={e => e.preventDefault() && false}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">E-mail@</InputLabel>
						<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Senha</InputLabel>
						<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
						<span className="opa">{msgErro}</span>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={login}
						className={classes.submit}>
						Entrar
          			</Button>
				</form>
				{/*
				<h1>Anywhere in your app!</h1>
                    <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                        errors.email = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                        errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={login}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </form>
                    )}
                    </Formik>
					 */}
			</Paper>
		</main>
	)

	async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/dashboard')
		} catch(error) {
				var errorCode = error.code;
				 if (errorCode === 'auth/wrong-password') {
					setPassword('');
					document.getElementById("password").focus();
					setMsgErro('Logica da senha pra pessoa lembrar');
				   alert('Senha Incorreta.');
				}
				if (errorCode === 'auth/invalid-email') {
					setPassword('');
					setEmail('');
					document.getElementById("email").focus();
					alert('E-mail inválido');
				 }
				 if (errorCode === 'auth/user-disabled') {
					setPassword('');
					setEmail('');
					document.getElementById("email").focus();
					alert('E-mail não cadastrado.');
				 }
				 if (errorCode === 'auth/user-not-found') {
					setPassword('');
					setEmail('');
					document.getElementById("email").focus();
					alert('E-mail não cadastrado.');
				 }
				console.log(error);
		}
	}
}

export default withRouter(withStyles(styles)(SignIn))