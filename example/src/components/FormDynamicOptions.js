import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React from 'react';

// Divisions
import DIVISIONS from 'divisions';

// Tree
const ExampleTree = new Tree({
	__name__: 'address',
	division: {
		__type__: 'string',
		__regex__: '[A-Z]{2}',
		__ui__: {
			__type__: 'select'
		}
	},
	country: {
		__type__: 'string',
		__regex__: '[A-Z]{2}',
		__ui__: {
			__type__: 'select',
			__options__: [
				[ 'CA', 'Canada' ],
				[ 'MX', 'Mexico' ],
				[ 'US', 'United States' ]
			]
		}
	}
});

// Component
export default function FormDynamicOptions(props) {
	return (
		<Form
			dynamicOptions={ [ {
				node: 'division',
				trigger: 'country',
				options: DIVISIONS
			} ] }
			onSubmit={value => console.log(value)}
			tree={ExampleTree}
			type="create"
		/>
	);
}