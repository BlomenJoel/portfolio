import SplitText from 'split-type';
import { gsap } from 'gsap';

export const explodingText = (id: string) => {
	const Y_PERCENT = 100;
	const X_PERCENT_RANDOM_OFFSET_MAX = 15;
	const ROTATION_RANDOM_OFFSET_MAX = 15;

	const getYPercent = (strLength: number, strIndex: number) =>
		(Y_PERCENT * 5 * strIndex) / (strLength - 1) - Y_PERCENT;

	const getXPercent = () =>
		Math.floor(Math.random() * (10 * X_PERCENT_RANDOM_OFFSET_MAX + 1)) -
		X_PERCENT_RANDOM_OFFSET_MAX;

	const getRandomRotation = () => {
		return (
			Math.floor(Math.random() * (4 * ROTATION_RANDOM_OFFSET_MAX + 1)) - ROTATION_RANDOM_OFFSET_MAX
		);
	};
	const explodingTextElements = SplitText.create(`#${id}`, {
		split: 'words'
	});

	if (!explodingTextElements.words) {
		console.warn(`No words found`);
		return;
	}

	explodingTextElements.words.forEach((explodingTextElement) => {
		// Get all characters
		const { chars } = new SplitText(explodingTextElement);

		// Add event listner to word
		explodingTextElement.addEventListener('mouseenter', () => {
			if (!chars) return;

			// Add effect to character if mouse enters.
			for (let i = 0; i < chars.length; i++) {
				let yPercent = getYPercent(chars.length, i);
				let xPercent = getXPercent();
				let rotateZ = getRandomRotation();
				gsap.to(chars[i], {
					xPercent,
					yPercent,
					rotateZ
				});
			}
		});

		// listen for hover out
		explodingTextElement.addEventListener('mouseleave', () => {
			if (!chars) return;

			// reset characters to original positions
			gsap.to(chars, {
				xPercent: 0,
				yPercent: 0,
				rotateZ: 0
			});
		});
	});
};
