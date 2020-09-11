import React from 'react'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'
import Portfolio from './Portfolio'
import Resume from './Resume'

const useStyles = makeStyles({
	particlesCanva: {
		position: 'absolute',
		opacity: '0.3',
		height: '100vh',
	},
})
const Home = () => {
	const classes = useStyles()
	return (
		<>
			<Header />
			<div style={{ height: '100vh' }}>
				<Particles
					canvasClassName={classes.particlesCanva}
					params={{
						particles: {
							number: {
								value: 45,
								density: {
									enable: true,
									value_area: 800,
								},
							},
							shape: {
								type: 'circle',
								stroke: {
									width: 1,
									color: 'gold',
								},
							},
							size: {
								value: 5,
								random: true,
								anim: {
									enable: true,
									speed: 5,
									size_min: 0.1,
									sync: true,
								},
							},
							opacity: {
								value: 1,
								random: true,
								anim: {
									enable: true,
									speed: 1,
									opacity_min: 0.1,
									sync: true,
								},
							},
						},
					}}
				/>
			</div>
			<br />
			<div style={{ height: '100%' }}>
				<Portfolio />
			</div>
			<div style={{ height: '100vh' }}>
				<Resume />
			</div>
		</>
	)
}

export default Home
