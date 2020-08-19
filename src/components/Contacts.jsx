import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
	form: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
	},
	button: {
		marginTop: '1rem',
		color: 'gold',
		borderColor: 'gold',
	},
}))

const InputField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: 'gold',
		},
		'& label': {
			color: '#c5c2c2	',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#c5c2c2',
			},
			'&:hover fieldset': {
				borderColor: '#e2e1e1',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#e2e1e1',
			},
		},
	},
})(TextField)

const Contacts = () => {
	const classes = useStyles()
	return (
		<Box component='div' style={{ background: '#1f2227', height: '100vh' }}>
			<Grid container justify='center'>
				<Box component='form' className={classes.form}>
					<Typography
						variant='h5'
						style={{
							color: 'gold',
							textAlign: 'center',
							textTransform: 'uppercase',
						}}>
						Contact Me...
					</Typography>
					<InputField
						fullWidth={true}
						label='Name'
						variant='outlined'
						inputProps={{ style: { color: '#c5c2c2' } }}
						margin='dense'
						size='medium'></InputField>
					<br />
					<InputField
						fullWidth={true}
						label='Email'
						variant='outlined'
						inputProps={{ style: { color: '#c5c2c2' } }}
						margin='dense'
						size='medium'></InputField>
					<br />
					<InputField
						fullWidth={true}
						label='Company name'
						variant='outlined'
						inputProps={{ style: { color: '#c5c2c2' } }}
						margin='dense'
						size='medium'></InputField>
					<br />
					<Button
						className={classes.button}
						//style={{ marginTop: '1rem', color: 'gold', borderColor: 'gold' }}
						variant='outlined'
						fullWidth={true}
						endIcon={<SendIcon />}>
						Contact Me
					</Button>
				</Box>
			</Grid>
		</Box>
	)
}

export default Contacts
