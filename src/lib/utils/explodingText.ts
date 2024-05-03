import SplitText from 'split-type';
import { gsap } from 'gsap';


const Y_PERCENT = 100;
const X_PERCENT_RANDOM_OFFSET_MAX = 15;
const ROTATION_RANDOM_OFFSET_MAX = 15;

export const getXPercent = () =>
	Math.floor(Math.random() * (10 * X_PERCENT_RANDOM_OFFSET_MAX + 1))
	- X_PERCENT_RANDOM_OFFSET_MAX;

export const getYPercent = (strLength: number, strIndex: number) =>
	(Y_PERCENT * 5 * strIndex) / (strLength - 1) - Y_PERCENT;

export const getRandomRotation = () => {
	return (
		Math.floor(Math.random() * (4 * ROTATION_RANDOM_OFFSET_MAX + 1)) - ROTATION_RANDOM_OFFSET_MAX
	);
};

export const explodingEffect = (chars: HTMLElement[] | Element[] | null) => {
	if (!chars) return;

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
}

export const explodingEffectLeaving = (chars: HTMLElement[] | Element[] | null) => {
	if (!chars) return;

	// reset characters to original positions
	gsap.to(chars, {
		xPercent: 0,
		yPercent: 0,
		rotateZ: 0,
	});
}

export const explodingText = (id: string) => {

	const explodingTextElements = SplitText.create(`#${id}`, {
		split: 'words'
	});

	if (!explodingTextElements.words) {
		console.warn(`No words found`);
		return;
	}
	explodingTextElements.words.forEach((explodingTextElement) => {
		// Get all characters
		const { chars } = new SplitText(explodingTextElement, { wordClass: `word-${explodingTextElement.textContent}`, charClass: `char-${explodingTextElement.textContent}` });
		// Add event listner to word
		explodingTextElement.addEventListener('mouseenter', () => {
			// Add effect to character if mouse enters.
			explodingEffect(chars)
		});

		// listen for hover out
		explodingTextElement.addEventListener('mouseleave', () => {
			explodingEffectLeaving(chars)
		});
	});
};
