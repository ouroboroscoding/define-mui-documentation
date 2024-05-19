import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React from 'react';

// Tree
const ExampleTree = new Tree({
	__name__: 'address',
	line1: 'string',
	line2: 'string',
	city: 'string',
	division: 'string',
	country: 'string'
});

// Component
export default function FormGridSizes(props) {
	return (
		<Form
			gridSizes={ {
				line1: { xs: 9 },
				line2: { xs: 3 },
				city: { xs: 12, sm: 6 },
				division: { xs: 6, sm: 3 },
				country: { xs: 6, sm: 3 }
			} }
			onSubmit={value => console.log(value)}
			tree={ExampleTree}
			type="create"
		/>
	);
}