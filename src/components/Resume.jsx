import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/styles'
import { Box, CardMedia, Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import HeadTitle from './HeadTitle'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	header: {
		background: '#1f2227',
	},
	subHeading: {
		color: 'white',
		padding: '0',
		textTransform: 'uppercase',
	},
	subtitle1: {
		color: 'tomato',
	},
	resumeImage: {
		height: '100%',
	},
	typedContainer: {
		position: 'absolute',
		top: '15%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100vw',
		textAlign: 'center',
		//zIndex: 1,
	},
	sloganContainer: {
		position: 'absolute',
		top: '90%',
		left: '10%',
		transform: 'translate(-50%, -50%)',
		width: '100vw',
		//textAlign: 'center',
		//zIndex: 1,
	},
	button: {
		marginTop: '1rem',
		color: '#1f2227',
		borderColor: 'gold',
		background: 'gold',
		position: 'absolute',
		top: '75%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		'&:hover': {
			color: 'gold',
		},
	},
})

const SectionWipesStyled = styled.div`
	overflow: hidden;
	#pinContainer {
		margin: auto;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#pinContainer .panel {
		//height: 100vh;
		width: 100%;
		position: absolute;
		text-align: center;
	}
	.panel span {
		position: relative;
		display: block;
		top: 50%;
		font-size: 80px;
	}
	.panel.green {
		background-color: gold;
		margin-bottom: 800px;
	}
`
const Resume = () => {
	const classes = useStyles()

	return (
		<>
			<Box component='header' className={classes.header}>
				<SectionWipesStyled>
					<Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
						<Scene
							triggerHook='onLeave'
							duration='300%'
							pin
							style={{
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								position: 'absolute',
							}}>
							<Timeline wrapper={<div id='pinContainer' />}>
								<section style={{ position: 'absolute' }}>
									<Box className={classes.typedContainer}>
										<HeadTitle />
									</Box>
									<CardMedia
										component='img'
										alt={'resume-1'}
										image={require('../data/resumeImages/web p1.png')}
										className={classes.resumeImage}
									/>
								</section>
								<Tween from={{ y: '+100%' }} to={{ y: '0%' }}>
									<section className='panel'>
										<CardMedia
											component='img'
											alt={'resume-1'}
											image={require('../data/resumeImages/web p2.png')}
											className={classes.resumeImage}
										/>
									</section>
								</Tween>
								<Tween from={{ y: '+100%' }} to={{ y: '0%' }}>
									<section className='panel green'>
										<CardMedia
											component='img'
											alt={'resume-1'}
											image={require('../data/resumeImages/web p3.png')}
											className={classes.resumeImage}
										/>
									</section>
								</Tween>
								<Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
									<section className='panel'>
										<CardMedia
											component='img'
											alt={'resume-1'}
											image={require('../data/resumeImages/web p4.png')}
											className={classes.resumeImage}
										/>
									</section>
								</Tween>{' '}
								<Tween from={{ x: '100%' }} to={{ x: '0%' }}>
									<section className='panel'>
										<CardMedia
											component='img'
											alt={'resume-1'}
											image={require('../data/resumeImages/web p5.png')}
											className={classes.resumeImage}
										/>
									</section>
								</Tween>
								{/* <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
									<section className='panel'>
										<Portfolio />
									</section>
								</Tween> */}
								<Tween from={{ y: '-100%' }} to={{ y: '0%' }}>
									<section style={{ position: 'absolute' }}>
										<Box className={classes.typedContainer}>
											<HeadTitle />
										</Box>
										<CardMedia
											component='img'
											alt={'resume-1'}
											image={require('../data/resumeImages/web p1.png')}
											className={classes.resumeImage}
										/>
										<Button
											className={classes.button}
											variant='outlined'
											component={Link}
											to={'/contacts'}
											endIcon={<SendIcon />}>
											Contact Me
										</Button>
									</section>
								</Tween>
							</Timeline>
						</Scene>
					</Controller>
				</SectionWipesStyled>
			</Box>
		</>
	)
}

export default Resume
