import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles({
	root: {
		'& .MuiBottomNavigationAction-roo': {
			minWidth: 0,
			maxWidth: 250,
		},
		'& .MuiSvgIcon-root': {
			fill: 'gold',
			'&:hover': {
				fill: 'white',
				fontSize: '1.8rem',
			},
		},
	},
})
const Footer = () => {
	const classes = useStyles()
	return (
		<BottomNavigation width='auto' style={{ background: '#1f2227' }}>
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0 }}
				icon={<GitHubIcon />}
				target='_blank'
				href='https://github.com/Majd-07'
			/>
			<BottomNavigationAction
				target='_blank'
				href='https://www.linkedin.com/in/majd-al-shoghri'
				className={classes.root}
				style={{ padding: 0 }}
				icon={<LinkedInIcon />}
			/>
			<BottomNavigationAction
				target='_blank'
				href='https://www.instagram.com/majd_lsham'
				className={classes.root}
				style={{ padding: 0 }}
				icon={<InstagramIcon />}
			/>
		</BottomNavigation>
	)
}

export default Footer
