import React, { useState } from 'react';

function App() {
	const [isRed, toggleIsRed] = useState(true);
	const theme = {
		styles: {
			backgroundColor: isRed ? 'red' : 'blue',
			color: '#fff',
		},
		text: isRed ? 'blue' : 'red',
	};
	const onClick = () => {
		toggleIsRed(!isRed);
	};
	return (
		<div className='App' style={{ textAlign: 'center' }}>
			<button onClick={onClick} style={theme.styles}>
				Change color to {theme.text}
			</button>
		</div>
	);
}

export default App;
