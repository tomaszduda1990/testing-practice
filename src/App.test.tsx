import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { camelCaseSplit } from './App';

describe('Test of <App> Component --------------', () => {
	beforeEach(() => {
		render(<App />);
	});

	test('button has correct initial text', () => {
		const button = screen.getByRole('button', {
			name: /change color to MidnightBlue/i,
		});
		//has initial text content 'change color to blue'
		expect(button).toBeInTheDocument();

		// after click has text content 'change color to red'
		userEvent.click(button);
		expect(button).toHaveTextContent(/change color to MediumVioletRed/i);
	});

	test('button has initial color red and changes to MidnightBlue after click', () => {
		const button = screen.getByRole('button', {
			name: /change color to MidnightBlue/i,
		});
		// button has initial color set to red
		expect(button).toHaveStyle('background-color: MediumVioletRed');

		// after click button changes color to MidnightBlue
		userEvent.click(button);
		expect(button).toHaveStyle('background-color: MidnightBlue');
	});

	test('checkbox value true makes button active, checkbox value false makes button disabled', () => {
		const checkbox = screen.getByRole('checkbox', {
			name: /disable button/i,
		});
		const button = screen.getByRole('button');
		// initial state not checked, button enabled
		expect(checkbox).not.toBeChecked();
		expect(button).toBeEnabled();

		// after click checkox checked, button disabled
		userEvent.click(checkbox);
		expect(checkbox).toBeChecked();
		expect(button).toBeDisabled();
		expect(button).toHaveStyle('background-color: grey; cursor: not-allowed;');

		// reenable the button
		userEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
		expect(button).toBeEnabled();
	});
});

describe('spaces before camel case capital letters -------------', () => {
	test('works for no capital letters like "red"', () => {
		expect(camelCaseSplit('Red')).toBe('red');
	});

	test('works with camelCase with one capital letter color name like "midnightBlue"', () => {
		expect(camelCaseSplit('midnightBlue')).toBe('midnight blue');
	});

	test('works with camelCase more than one capital letters color name like "someSuperColor"', () => {
		expect(camelCaseSplit('someSuperColor')).toBe('some super color');
	});
});
