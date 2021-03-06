import React, { Component } from 'react';
import ImageCol from './ImageCol';
import TextCol from './TextCol';
import '../css/styles.css';

export default class Body extends Component {
	state = {
		data: require('../../DATA/data.json'),
		displayedSection: 0,
	};
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	incrementSection() {
		let currentSection = this.state.displayedSection;
		const totalSections = this.state.data.length - 1;
		const nextSection =
			currentSection < totalSections ? (currentSection += 1) : currentSection;
		return nextSection;
	}
	decrementSection() {
		let currentSection = this.state.displayedSection;
		const nextSection =
			currentSection > 0 ? (currentSection -= 1) : currentSection;
		return nextSection;
	}

	handleKeyDown = (e) => {
		if (e.keyCode === 39 || e.keyCode === 40) {
			this.setState({ displayedSection: this.incrementSection() });
		} else if (e.keyCode === 37 || e.keyCode === 38) {
			this.setState({ displayedSection: this.decrementSection() });
		}
	};
	handleClick = () => {
		this.setState({ displayedSection: this.incrementSection() });
	};
	render() {
		const sectionDisplayed = this.state.data[this.state.displayedSection];
		return (
			<div className='container' onClick={this.handleClick}>
				<div className='row flex-fill bg-dark vh-100' key={sectionDisplayed.id}>
					<div className='col d-flex'>
						<ImageCol ImageURL={sectionDisplayed.imageURL} />
					</div>
					<div className='col d-flex'>
						<TextCol text={sectionDisplayed.text}></TextCol>
					</div>
				</div>
				<script src='./js/nextparticle.js'></script>
			</div>
		);
	}
}
