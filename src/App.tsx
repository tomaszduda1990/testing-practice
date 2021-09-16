import React, { useState } from 'react';
export const camelCaseSplit = (colorName: string) => {
	return colorName.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
};
interface Theme {
	styles: {
		backgroundColor: string;
		color: string;
		cursor?: string;
	};
	text: string;
}
function App() {
	const [isRed, toggleIsRed] = useState(true);
	const [isButtonEnabled, toggleButtonIsEnabled] = useState(true);
	const theme: Theme = {
		styles: {
			backgroundColor: isRed ? 'MediumVioletRed' : 'MidnightBlue',
			color: '#fff',
		},
		text: isRed ? 'MidnightBlue' : 'MediumVioletRed',
	};
	if (!isButtonEnabled) {
		theme.styles.backgroundColor = 'grey';
		theme.styles.cursor = 'not-allowed';
	}
	const onClick = () => {
		toggleIsRed(!isRed);
	};
	const onInputCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		toggleButtonIsEnabled(!event.currentTarget.checked);
	};
	return (
		<div className='App' style={{ textAlign: 'center' }}>
			<button
				onClick={onClick}
				style={theme.styles}
				disabled={!isButtonEnabled}
			>
				Change color to {theme.text}
			</button>
			<div>
				<label htmlFor='allowButton'>Disable button</label>
				<input
					onChange={onInputCheck}
					type='checkbox'
					name='allowButton'
					id='allowButton'
					value={isButtonEnabled.toString()}
				/>
			</div>
		</div>
	);
}

export default App;
