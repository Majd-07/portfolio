import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
	ListItemIcon,
} from '@material-ui/core'
//import { ArrowBack } from '@material-ui/icons'
import DehazeIcon from '@material-ui/icons/Dehaze'
import Footer from '../components/Footer'
import avatar from '../avatar.png'
import { menuItems } from '../data'

const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		//   color: 'red', // 🔴
		width: 250,
		height: '100%',
		background: 'gold',
	},
	avatar: {
		display: 'block',
		margin: '0.5rem auto',
		width: theme.spacing(13),
		height: theme.spacing(13),
	},
	listItem: {
		color: 'black',
	},
}))

function Navbar() {
	const [state, setState] = useState({
		right: false,
	})
	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open })
	}
	const classes = useStyles()
	const sideList = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component='div'
			onClick={toggleSlider(slider, false)}>
			<Avatar className={classes.avatar} src={avatar} alt='Majd AlShoghri' />
			<Divider />
			<List>
				{menuItems.map((listItem, index) => (
					<ListItem button key={index} component={Link} to={listItem.listPath}>
						<ListItemIcon className={classes.listItem}>
							{listItem.listIcon}
						</ListItemIcon>
						<ListItemText
							className={classes.listItem}
							primary={listItem.listText}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	)
	return (
		<>
			<Box component='nav'>
				<AppBar position='static' style={{ background: 'gold' }}>
					<Toolbar>
						<IconButton onClick={toggleSlider('right', true)}>
							<DehazeIcon style={{ color: 'gray' }} />
						</IconButton>
						<Typography variant='h5'>Majd AlShoghri Portfolio</Typography>
						<MobilRightMenuSlider
							anchor='left'
							open={state.right}
							onClose={toggleSlider('right', false)}>
							{sideList('right')}
							<Footer />
						</MobilRightMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}

export default Navbar
