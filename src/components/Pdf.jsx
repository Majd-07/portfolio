// import React, { Component } from 'react'
// import { Document, Page, pdfjs } from 'react-pdf'
// import madj from '../data/majd.jpg'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

// export default class Pdf extends Component {
// 	state = {
// 		numPages: null,
// 		pageNumber: 1,
// 	}

// 	onDocumentLoadSuccess = ({ numPages }) => {
// 		this.setState({ numPages })
// 	}
// 	render() {
// 		const { pageNumber, numPages } = this.state
// 		return (
// 			<div>
// 				<img src={madj} alt='sv' />
// 				<Document
// 					file='../data/MAJD AL SHOGHRI Resume 2020 P1.jpg'
// 					onLoadSuccess={this.onDocumentLoadSuccess}>
// 					<Page pageNumber={pageNumber} />
// 				</Document>
// 				<p>
// 					Page {pageNumber} of {numPages}
// 				</p>
// 			</div>
// 		)
// 	}
// }
