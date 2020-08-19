import React from 'react'
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons'

export const menuItems = [
	{
		listIcon: <Home />,
		listText: 'Home',
		listPath: '/',
	},
	{
		listIcon: <AssignmentInd />,
		listText: 'Resume',
		listPath: '/resume',
	},
	{
		listIcon: <Apps />,
		listText: 'Projects',
		listPath: '/projects',
	},
	{
		listIcon: <ContactMail />,
		listText: 'Contacts',
		listPath: '/contacts',
	},
]

export const portfolioImagesArray = [
	'web p1.png',
	'web p2.png',
	'web p3.png',
	'web p4.png',
	'web p5.png',
]
