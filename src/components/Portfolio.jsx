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
		gitHubLink: 'https://github.com/Majd-07/DoDone',
		demoLink: 'https://dodone.netlify.app/',
	},
	{
		id: 2,
		title: 'Movie Project',
		description:
			'This is a movie database project, where it shows movies, their casts, ratings, trailers, related movies, genres, and so on.This project uses The Movie DB API. Also, used Postman to explore the API and understand the data.',
		img: require('../images/movie-project.png'),
		gitHubLink: 'https://github.com/basil-kawak/movie-project',
		demoLink: 'https://modest-allen-fdb469.netlify.app/',
	},
	{
		id: 3,
		title: 'Madlibs Project',
		description:
			'Mad Libs is a phrasal template word game where one player prompts others for a list of words to substitute for blanks in a story before reading aloud. The game is frequently played as a party game or as a pastime.In normal mad libs, you usually just insert the word, but in this version, it is more like a fill in the blank of an existing story.',
		img: require('../images/Madlibs-Project.png'),
		gitHubLink: 'https://github.com/Majd-07/madlibs-project',
		demoLink: 'https://madlibs-app.netlify.app/',
	},
	{
		id: 4,
		title: 'RefuBook',
		description:
			'This website will be able to help refugees wherever they are. Information will be separated by country and users will be able to create their own account and share their own personal experiences and knowledge on how to find a job, rent a house, buy or sell things you might need, or how to join events happening in the	community.',
		img: require('../images/RefuBook-Porject.png'),
		gitHubLink: 'https://github.com/ReCoded-Org/capstone-istanbul-refubook',
		demoLink: 'https://refubook.netlify.app/#/',
	},
]

const useStyles = makeStyles({
	mainContainer: {
		background: '#1f2227',
		height: '100%',
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
			<Typography variant='h4' align='center' style={{ color: 'gold' }}>
				Projects
			</Typography>
			<Grid container spacing={1}>
				{projects.map((project, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Card className={classes.cardContainer}>
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
									href={project.gitHubLink}
									size='small'
									color='primary'>
									GitHub
								</Button>
								<Button
									//disabled
									target='_blank'
									color='secondary'
									size='small'
									href={project.demoLink}>
									Live Demo
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default Portfolio
