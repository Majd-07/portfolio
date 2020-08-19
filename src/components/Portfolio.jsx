import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	Box,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core'
//import projectImg from '../images/html-css-javascript-lg.jpg'
const projects = [
	{
		id: 1,
		title: 'DoDone',
		description:
			'DoDone is a kanboard project build using ReactJS framework linked with the Firebase as remote DataBase, with Drag&Drop feature from beautiful DnD ',
		img: require('../images/DoDone.png'),
	},
]

const useStyles = makeStyles({
	mainContainer: {
		background: '#1f2227',
		height: '100vh',
	},
	cardContainer: {
		maxWidth: 345,
		margin: '5rem auto',
	},
})
const Portfolio = () => {
	const classes = useStyles()
	return (
		<Box component='div' className={classes.mainContainer}>
			<Grid container justify='center'>
				<Grid item xs={12} sm={8} md={6}>
					<Typography variant='h4' align='center' style={{ color: 'white' }}>
						Projects
					</Typography>
					{projects.map((project, index) => (
						<Card key={index} className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt={project.title}
									height='200'
									image={project.img}
								/>
								<CardContent>
									<Typography gutterBottom variant='h5'>
										{project.title}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										{project.description}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									target='_blank'
									href='https://github.com/Majd-07/DoDone'
									size='small'
									color='primary'>
									GitHub
								</Button>
								<Button disabled color='secondary' size='small' color='primary'>
									Live Demo
								</Button>
							</CardActions>
						</Card>
					))}
				</Grid>
			</Grid>
		</Box>
	)
}

export default Portfolio
