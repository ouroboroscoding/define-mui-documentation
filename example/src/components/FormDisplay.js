import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React from 'react';

// Tree
const ExampleTree = new Tree({
	__name__: 'address',
	__ui__: {
		__order__: [
			'id', 'line1', 'line2', 'city',
			'division', 'country'
		]
	},
	line1: 'string',
	line2: 'string',
	city: 'string',
	division: 'string',
	country: {
		__type__: 'string',
		__regex__: '[A-Z]{2}'
	}
});

// Component
export default function FormDisplay(props) {
	return (
		<Form
			display={{
				__create__: [
					'country', 'division',
					'line1', 'line2', 'city'
				],
				line1: {
					__title__: 'Address'
				},
				line2: {
					__title__: 'Suite / Office / Apartment'
				},
				division: {
					__title__: 'State'
				},
				country: {
					__type__: 'select',
					__options__: [
						[ 'CA', 'Canada' ],
						[ 'MX', 'Mexico' ],
						[ 'US', 'United States' ]
					]
				}
			}}
			onSubmit={value => console.log(value)}
			tree={ExampleTree}
			type="create"
		/>
	);
}