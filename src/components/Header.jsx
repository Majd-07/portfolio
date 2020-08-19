import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Box } from '@material-ui/core'
import HeadTitle from './HeadTitle'
import avatar from '../avatar.png'

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: theme.spacing(1),
	},
	typedContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100vw',
		textAlign: 'center',
		zIndex: 1,
	},
}))

const Header = () => {
	const classes = useStyles()
	return (
		<Box className={classes.typedContainer}>
			<Grid container justify='center'>
				<Avatar className={classes.avatar} src={avatar} alt='Majd AlShoghri' />
			</Grid>

			<HeadTitle />
		</Box>
	)
}

export default Header
