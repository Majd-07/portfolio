import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import Typed from 'react-typed'

const useStyles = makeStyles({
	title: {
		color: 'gold',
	},
	subTitle: {
		color: 'gray',
		marginBottom: '3rem',
	},
})
const HeadTitle = () => {
	const classes = useStyles()
	return (
		<>
			<Typography className={classes.title} variant='h4'>
				<Typed strings={['MAJD ALSHOGHRI']} typeSpeed={40} />
			</Typography>

			<Typography className={classes.subTitle} variant='h5'>
				<Typed
					strings={['FrontEnd Developer', 'Graphic Designer', 'Photographer']}
					typeSpeed={40}
					backSpeed={60}
					loop
					smartBackspace
				/>
			</Typography>
		</>
	)
}

export default HeadTitle

// export const Slogan = () => {
// 	const classes = useStyles()
// 	return (
// 		<>
// 			<Typography className={classes.title} variant='h6'>
// 				<Typed
// 					strings={['Creativity and beauty are where I am']}
// 					typeSpeed={40}
// 				/>
// 			</Typography>
// 		</>
// 	)
// }
