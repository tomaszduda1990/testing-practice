import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test of <App> Component --------------', () => {
	test('button has correct initial color', () => {
		render(<App />);
		const button = screen.getByRole('button', {
			name: /change color to blue/i,
		});
		expect(button).toHaveStyle('background-color: red');
	});

	test('button has correct initial text', () => {
		render(<App />);
		const button = screen.getByRole('button', {
			name: /change color to blue/i,
		});
		expect(button).toBeInTheDocument();
	});

	test('button becomes blue after click', () => {
		render(<App />);
		const button = screen.getByRole('button', {
			name: /change color to blue/i,
		});
		userEvent.click(button);
		expect(button).toHaveStyle('background-color: red');
	});

	test('button onClick changes initial text', () => {
		render(<App />);
		const button = screen.getByRole('button', {
			name: /change color to blue/i,
		});
		userEvent.click(button);
		expect(button).toHaveTextContent(/change color to red/i);
	});
});
